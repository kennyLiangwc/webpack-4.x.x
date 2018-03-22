# webpack-4.x.x

测试构建时间降低了 60%-98%！！

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
##### webpack 4 在 package.json 中引入了对 sideEffects: false 的支持。当模块的 package.json 中添加该字段时，表明该模块没有副作用，也就意味着 webpack 可以安全地清除被用于重复导出(re-exports)的代码。

### 配置
- 删除了一些常用内置插件：
   1. NoEmitOnErrorsPlugin -> optimization.noEmitOnErrors (生产模式默认)
   2. ModuleConcatenationPlugin -> optimization.concatenateModules （生产模式默认）
   3. NamedModulesPlugin -> optimization.namedModules （开发模式默认）。
   4. 删除了 CommonsChunkPlugin，取而代之的是 optimization.splitChunks 和 optimization.runtimeChunk，这提供了细粒度的缓存策略控制
- 默认配置
   1. webpack 默认会按照 .wasm, .mjs, .js 和 .json 的扩展名顺序查找模块。
   2. output.pathinfo 在开发模式下默认是打开的
   3. 生产环境下，默认关闭内存缓存
   4. entry 的默认值是 ./src，output.path 的默认值是 ./dist
   5. 在选择模式选项时，默认值是 production
   
### 优化
- uglifyjs-webpack-plugin 发布 v1，支持 ES2015
- 使用 JSONP 数组来代替 JSONP 函数 –> 异步支持
- webpack 自身也可以删除无用代码。webpack 2/3 中是在 Uglify 时删除无用代码，webpack 4 中 webpack 也可以(在某些情况下)删除无用代码，避免 import() 引用无用代码时导致的奔溃
- 作用域提升后的模块将生成更少的代码
