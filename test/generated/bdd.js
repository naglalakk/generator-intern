define(function (require) {
  var bdd = require('intern!bdd');
  var assert = require('intern/chai!assert');
  var expect = require('intern/chai!expect');
  var should = require('intern/chai!should');

  bdd.describe('the thing being tested', function () {
    bdd.before(function () {
      // executes before suite starts
    });

    bdd.after(function () {
      // executes after suite ends
    });

    bdd.beforeEach(function () {
      // executes before each test
    });

    bdd.afterEach(function () {
      // executes after each test
    });

    bdd.it('should do foo', function () {
      // a test case
    });

    bdd.it('should do bar', function () {
      // another test case
    });
  });
});
