define(function (require) {
  var registerSuite = require('intern!object');<% _.each(required_libs, function(require){ %>
  var <%= require.varName %> = require('<%= require.require %>');<% }); %>

  registerSuite({
    name: '<%= testName %>',

    setup: function () {
      // executes before suite starts;
      // can also be called `before` instead of `setup`
    },

    teardown: function () {
      // executes after suite ends;
      // can also be called `after` instead of `teardown`
    },

    beforeEach: function () {
      // executes before each test
    },

    afterEach: function () {
      // executes after each test
    },

    'Test foo': function () {
      // a test case
    },

    'Test bar': function () {
      // another test case
    }
  });
});
