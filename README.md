# FpiFE

聚光前端

>  找回写代码的乐趣

## 启动

```bash
# 下载依赖包
yarn
# 开始写作
yarn docs:dev
```

## 调试

默认配置了 vscode 启动配置

```json
// .vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        // ... 其他启动命令
        {
            "type": "node",
            "request": "launch",
            "name": "Debug FpiFE",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run-script",
                "debug"
            ],
            "port": 9229
        }
    ]
}
```

启动调试

![](http://ww1.sinaimg.cn/mw690/a75caef7gy1g16s7mfla1j20qu0kmjti.jpg)

在代码中设置断点，打开 vscode 终端 Debug Console 查看调试日志

## 更新日志

### 2019-03-20

- docs(v0.1.0): 

    - 文档工程搭建完第一版
  
    - 除了[VuePress 1.x](https://v1.vuepress.vuejs.org/zh/) 功能外，添加了在 `markdown` 写 `vue` demo 的功能，`UI` 展示类似 `ElementUI`
  
