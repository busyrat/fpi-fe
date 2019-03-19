const container = require('markdown-it-container')
const mdit = require('markdown-it')()
const striptags = require('./strip-tags')
const fs = require('fs')
const path = require('path')

const _path = p => path.resolve(__dirname, p)

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function creatPath(path) {
  const pathArr = path.split('/');
  let _path = '';
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i]) {
      _path += `/${pathArr[i]}`;
      if (!fs.existsSync(_path)) {
        fs.mkdirSync(_path);
      }
    }
  }
}

function creatDemoComponent(content, name) {
  let path = name.replace(/-/, '/')
  let file = _path(`../components/${path}.vue`)
  fs.writeFileSync(file, content, { encoding: 'utf8' })
}

function deleteAllDemoComponents() {
  let files = [];
  let path = _path(`../components/Demo`)
  creatPath(path)
  files = fs.readdirSync(path);
  files.forEach(function (file, index) {
    let curPath = path + "/" + file;
    if (fs.statSync(curPath).isDirectory()) { // recurse
      deleteall(curPath);
    } else { // delete file
      fs.unlinkSync(curPath);
    }
  });
}

let _demoCache = {}
let _demoCacheAdd = true

module.exports = (options, context) => ({
  name: 'md-demo',

  beforeDevServer(app, server) {

  },

  afterDevServer(app, server) {

  },

  extendPageData($page) {
    if (JSON.stringify(_demoCache) === '{}') {
      deleteAllDemoComponents()
    }
    let { _content: content, key, regularPath } = $page
    if (typeof content === 'string') {
      let demoCodes = content.split(/:::/).filter(s => /^\s*demo/.test(s))

      demoCodes.forEach((code, index) => {
        let name = `Demo-Demo${regularPath.replace(/[\/\.]/g, '_')}_${index}`
        if (_demoCacheAdd && /<template/.test(code)) {
          _demoCache[name] = code
          creatDemoComponent(code, name)
        }
      })
    }
  },

  extendMarkdown(md) {
    const validate = (params) => {
      return params.trim().match(/^demo\s*(.*)$/);
    }

    const render = (tokens, idx) => {
      _demoCacheAdd = false
      var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        var description = (m && m.length > 1) ? m[1] : '';
        var content = tokens[idx + 1].content;
        var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
        var script = striptags.fetch(content, 'script');
        var style = striptags.fetch(content, 'style');
        var jsfiddle = { html: html, script: script, style: style };
        var descriptionHTML = description
          ? mdit.render(description)
          : '';

        jsfiddle = mdit.utils.escapeHtml(JSON.stringify(jsfiddle));

        let componentTag
        for(let key in _demoCache) {
          if (_demoCache[key].indexOf(content) > -1) {
            componentTag = key
            tokens[idx].componentTag = componentTag
          }
        }

        let sourceSlot = (script && style && componentTag )
          ? `<${componentTag} slot="source"></${componentTag}>`
          : `<div slot="source">${html}</div>`

        return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                  ${sourceSlot}
                  ${descriptionHTML}
                  <div slot="highlight"></div>`;
      }
      return '</div></demo-block>\n';
    }

    md.use(container, 'demo', { render, validate })
  }
})
