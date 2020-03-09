const path = require("path");

module.exports = {
    entry: "./example/example.js",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js",
        publicPath: "/dist"
    }
}