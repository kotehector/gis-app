var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: [{
                        loader: 'ngtemplate-loader',
                        options: {
                            requireAngular: true
                        }
                    },
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: ['/node_modules/'],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: ['es2015'],
                    }
                }],
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name: '[hash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ]
    }
};