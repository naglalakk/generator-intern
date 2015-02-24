define(function (require) {
  var tdd = require('intern!tdd');<% _.each(required_libs, function(require){ %>
  var <%= require.varName %> = require('<%= require.require %>');<% }); %>

  tdd.suite('Suite name', function () {
    tdd.before(function () {
      // executes before suite starts
    });

    tdd.after(function () {
      // executes after suite ends
    });

    tdd.beforeEach(function () {
      // executes before each test
    });

    tdd.afterEach(function () {
      // executes after each test
    });

    tdd.test('Test foo', function () {
      // a test case
    });

    tdd.test('Test bar', function () {
      // another test case
    });
  });
});
