/*jshint node:true*/

var fleck = require('fleck');

module.exports = {
  description: 'Make a new project',

  locals: function(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = fleck.dasherize(rawName);

    return {
      name: name
    };
  }
};
