'use strict';

export default {

  browserPort: 3001,
  UIPort: 3002,

  sourceDir: './../public/code/',
  buildDir: './../public/assets/',

  styles: {
    src: './../public/code/styles/**/*.*',
    dest: './../public/assets/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: './../public/code/js/**/*.js',
    dest: './../public/assets/js'
  },

  images: {
    src: './../public/code/images/**/*',
    dest: './../public/assets/images'
  },

  fonts: {
    src: ['./../public/code/fonts/**/*'],
    dest: './../public/assets/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: './../public/code/index.html',
    src: './../public/code/views/**/*.html',
    dest: './../public/code/js'
  },

  gzip: {
    src: './../public/assets/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: './../public/assets/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
