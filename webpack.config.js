const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.ts'],
    output: {
        publicPath: '/public',
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        publicPath: '/public',
        port: 4000,
        historyApiFallback: {
            index: './public/index.html'
        },
    },
    module: {
        rules: [
            {
                test: /(\.ts$|\.tsx$)/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.html$/,
                use: {
                    loader: '@munster/loader'
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    devtool: "source-map"
};
