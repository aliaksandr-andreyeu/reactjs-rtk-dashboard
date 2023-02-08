const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');

const copyPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
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
    mode: mode,
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: './js/script.js'
    },
    devServer: {
      host: (dotEnvs && dotEnvs.HOST) || 'localhost',
      port: (dotEnvs && dotEnvs.PORT) || 8000,
      static: {
        directory: path.join(__dirname, 'build')
      },
      hot: true,
      open: true,
      historyApiFallback: {
        index: 'index.html'
      }
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          type: 'asset/inline'
        },
        {
          test: /\.js?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env']
              }
            }
          ],
          exclude: /node_modules/
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
        '@router': path.join(__dirname, 'src/router'),
        '@containers': path.join(__dirname, 'src/containers'),
        '@constants': path.join(__dirname, 'src/constants')
      },
      extensions: ['.js', '.scss']
    }
  };
};
