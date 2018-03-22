# webpack-4.x.x

## webpack4 独立 webpack-cli，增加mode模式配置，提供了 5 种打包模块类型(javascript/auto,javascript/esm,javascript/dynamic,json,webassembly/experimental)，sideEffects 设置

### webpack4 初体验
##### 安装最新版webpack
---
1. npm install webpack@bate -g 全局  npm intsll webpack@bate -D 局部
```
 运行 webpack -v 报错
  The CLI moved into a separate package: webpack-cli,please install 'webpack-cli' in addition to webpack itself to use the CLI
```
#####  webpack4 将webpack相关命令行迁移到webpack-cli,需要另外安装 npm install webpack-cli -D

2.安装完webpack-cli,运行webpack
 ```
 WARNING in configuration
 The 'mode' option has not been set. Set 'mode' option to 'development' or 'production' to enable defaults for this emviroment. 
 ```
 ##### webpack4 需要配置mode模式. Mode,是我们为减小生产环境构建体积以及节约开发环境的构建时间提供的一种优化方案。
 1)development 模式
 - 主要优化了增量构建速度和开发体验
 - process.env.NODE_ENV 的值不需要再定义，默认是 development
 - 开发模式下支持注释和提示，并且支持 eval 下的 source maps
 - 运行时有用的错误消息
 
 2)production 模式
 - 默认提供所有可能的优化，如代码压缩/作用域提升等
 - 不支持 watching
 - process.env.NODE_ENV 的值不需要再定义，默认是 production
 - 不公开源代码或文件路径
 
---

### sideEffects 设置
###### webpack 4 在 package.json 中引入了对 sideEffects: false 的支持。当模块的 package.json 中添加该字段时，表明该模块没有副作用，也就意味着 webpack 可以安全地清除被用于重复导出(re-exports)的代码。

### 配置
- 删除了一些常用内置插件：
-- aaa
