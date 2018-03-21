/*
* @Author: KennyLiangwc
* @Date:   2018-03-21 16:52:35
* @Last Modified time: 2018-03-21 17:21:56
*/
const baseWebpack = require("./webpack.base");

module.exports = Object.assign({
	mode: "development",
	devtool: "source-map"
},baseWebpack)