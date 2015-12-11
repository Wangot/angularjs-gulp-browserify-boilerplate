'use strict';

export default {

  browserPort: 3001,
  UIPort: 3002,

  sourceDir: './../public/js/app/',
  buildDir: './../public/js/build/',

  styles: {
    src: 'app/styles/**/*.scss',
    dest: './../public/js/build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: './../public/js/build/js'
  },

  images: {
    src: 'app/images/**/*',
    dest: './../public/js/build/images'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: './../public/js/build/fonts'
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
    index: 'app/index.html',
    src: 'app/views/**/*.html',
    dest: 'app/js'
  },

  gzip: {
    src: './../public/js/build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: './../public/js/build/',
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
