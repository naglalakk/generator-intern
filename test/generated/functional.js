define(function (require) {
  var registerSuite = require('intern!object');
  var assert = require('intern/chai!assert');
  var expect = require('intern/chai!expect');
  var should = require('intern/chai!should');

  registerSuite({
    name: 'functional',

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
