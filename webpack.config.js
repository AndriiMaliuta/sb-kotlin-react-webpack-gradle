module.exports = {
    context: __dirname + '/src/main/resources/static/js',
    entry: {
        App: './App.js'
    },
    mode: 'production',
    output: {
        path: __dirname + '/build/resources/main/static',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}