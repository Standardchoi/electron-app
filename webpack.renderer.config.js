const rules = require('./webpack.rules');

rules.push({
  test: /\.jsx?$/,  // React 파일을 위한 규칙
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react'],  // React를 위한 Babel 프리셋
    },
  },
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
