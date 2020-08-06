const { environment } = require('@rails/webpacker')

module.exports = environment

// ...
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

environment.plugins.prepend("CleanWebpackPlugin", new CleanWebpackPlugin());

// ...
