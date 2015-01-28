'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('intern:app', function () {
    describe('when generating a unit test', function () {
        before(function (done) {
            helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(__dirname, './tmp'))
            .withPrompt({
                testName: 'test',
                testType: 'unit',
                testStyle: 'bdd',
                required_libs: ['assert', 'expect', 'should'],
                testPath: 'test/tmp'
            })
           .on('end', done);
        });

        it('creates files', function () {
            assert.file(['test/tmp/test.js']);
        });
    });
});
