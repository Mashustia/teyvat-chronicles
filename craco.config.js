/* craco.config.js */

const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');

module.exports = {
  webpack: {
    plugins: {
      add: [
        imagemin(['public/images/*{png,jpg,svg,gif}'], {
          destination: 'build/images',
          plugins: [
            imageminOptipng(),
            imageminGifsicle(),
            imageminJpegtran(),
            imageminSvgo({
              plugins: [{
                name: 'removeViewBox',
                active: false
              }]
            })
          ]
        })
      ]
    },
    configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
  },
}
