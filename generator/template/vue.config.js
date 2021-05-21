/* eslint @typescript-eslint/no-var-requires: 'off' */
const terserPlugin = require('terser-webpack-plugin');
module.exports = {
  publicPath: '/',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // eslint-disable-next-line
  configureWebpack: config => {
    return {
      optimization: {
        minimizer: [
          new terserPlugin({
            terserOptions: {
              format: {
                comments: false,
              },
              compress: {
                drop_console: true,
              },
            },
            extractComments: 'false',
          }),
        ],
      },
    };
  },
};
