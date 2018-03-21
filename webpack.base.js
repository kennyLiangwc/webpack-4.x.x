/*
* @Author: KennyLiangwc
* @Date:   2018-03-21 17:08:49
* @Last Modified time: 2018-03-21 17:19:21
*/
module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: "/node_modules/",
				options: {
					presets: ["es2015"]
				}
			}
		]
	}
}