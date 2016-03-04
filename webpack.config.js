module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './index.js',
    html: './index.html'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: '/\.eot(\?v=\d+\.\d+\.\d+)?$/',
        loader: 'file'
      },
      {
        test: '/\.(woff|woff2)$/',
        loader: 'url?prefix=font/&limit=5000'
      },
      {
        test: '/\.ttf(\?v=\d+\.\d+\.\d+)?$/',
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: '/\.svg(\?v=\d+\.\d+\.\d+)?$/',
        loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
