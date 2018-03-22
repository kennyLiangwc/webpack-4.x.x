/*
* @Author: KennyLiangwc
* @Date:   2018-03-21 16:57:53
* @Last Modified time: 2018-03-22 11:07:08
*/
const baseWebpack = require("./webpack.base")
module.exports = Object.assign({
	mode: "production",
	devtool: "cheap-module-source-map"
},baseWebpack)