'use strict';

// app's namespace
var learnjs = {};

learnjs.showView = function (hash) {
  var probremView = $('<div class="probrem-view">').text('Coming Soon!');
  $('.view-container').empty().append(probremView);
};
