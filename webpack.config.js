const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');
const esLintPlugin = require('eslint-webpack-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = (env, argv) => {
  const mode = (argv && argv.mode) || 'development';

  const dotEnvs =
    dotenv.config({
      path: path.join(__dirname, `./src/environments/.env.${mode}`)
    }).parsed || {};

  const envPrefix = (dotEnvs && dotEnvs.REACT_APP_ENV_PREFIX) || 'REACT_ENV';

  const reactEnvs = Object.keys(dotEnvs).reduce(
    (prev, next) => ({
      [envPrefix]: {
        ...prev[envPrefix],
        [next]: JSON.stringify(dotEnvs[next])
      }
    }),
    {
      [envPrefix]: {}
    }
  );

  return {
    devServer: {
      historyApiFallback: {
        index: 'index.html'
      },
      host: (dotEnvs && dotEnvs.HOST) || 'localhost',
      hot: true,
      open: true,
      port: (dotEnvs && dotEnvs.PORT) || 8000,
      static: {
        directory: path.join(__dirname, 'build')
      }
    },
    entry: './src/index.js',
    mode: mode,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            miniCssExtractPlugin.loader,
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
        }
      ]
    },
    output: {
      filename: './js/script.js',
      path: path.join(__dirname, 'build')
    },
    plugins: [
      new DefinePlugin(reactEnvs),
      new copyPlugin({
        patterns: [{ from: 'public' }]
      }),
      new styleLintPlugin({
        fix: true
      }),
      new esLintPlugin({
        fix: true
      }),
      new miniCssExtractPlugin({
        filename: './css/style.css'
      })
    ],
    resolve: {
      alias: {
        '@components': path.join(__dirname, 'src/components'),
        '@constants': path.join(__dirname, 'src/constants'),
        '@containers': path.join(__dirname, 'src/containers'),
        '@helpers': path.join(__dirname, 'src/helpers'),
        '@router': path.join(__dirname, 'src/router'),
        '@store': path.join(__dirname, 'src/store'),
        '@context': path.join(__dirname, 'src/context')
      },
      extensions: ['.js', '.scss']
    }
  };
};
