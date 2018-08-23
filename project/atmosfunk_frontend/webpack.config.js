const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const common = {
    node: {
      fs: "empty"
    },
}

const developmentConfig = merge([
  parts.babelLoader(),
  parts.loadImages(),
]);

module.exports = merge(
    common,
    developmentConfig
);
