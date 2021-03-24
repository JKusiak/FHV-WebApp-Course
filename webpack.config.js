const path = require('path');

module.exports = {
  entry: {
    home: ['./src/home.ts'],
    newmessage: ['./src/newmessage.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
      // {
      //   test:/\.html$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]'
      //       }
      //     }
      //   ],
      //   // exclude: path.resolve(__dirname, 'src/home.html')
      // }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};