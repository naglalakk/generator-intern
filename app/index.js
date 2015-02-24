'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path  = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the majestic' + chalk.red('Intern') + ' generator!'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'testName',
            message: 'Name of test?',
            default: ''
        },{
            type: 'list',
            name: 'testType',
            message: 'What kind of test is this? (unit/functional)',
            choices: [
                'unit',
                'functional'
            ]
        },{
            type: 'list',
            name: 'testStyle',
            message: 'Choose test style (bdd, tdd, object)',
            choices: [
                'bdd',
                'tdd',
                'object'
            ],
            when: function(testTypeAnswers) {
                return testTypeAnswers.testType === 'unit';
            }
        },{
            type: 'checkbox',
            name: 'required_libs',
            message: 'Choose 1 or more assertion libraries to use with your test',
            choices: [
                'assert',
                'expect',
                'should'
            ]
        },{
            type: 'input',
            name: 'testPath',
            message: 'Please provide a path to where you would like to store this test',
            default: ''
        }
    ];

    this.prompt(prompts, function (props) {

      var prefix = 'intern';
      var chai_prefix = prefix + '/chai!';

      // Name of the test
      // NOTE: .js will be added
      this.testName = props.testName;

      if (props.testType !== 'unit') {
        // functional tests use object by default
        this.testStyle = 'object';
      } else {
        this.testStyle = props.testStyle;
      }

      // Location where test file will be stored
      this.testPath = props.testPath;


      // required_libs,
      // List of dictionaries
      //    key: varName = string, name of the variable e.g. var tdd = ...
      //    key: require = string to be required e.g: require('intern!object')
      this.required_libs = [];
      for(var i = 0; i < props.required_libs.length; i++) {
            var obj = {
                varName: props.required_libs[i],
                require: chai_prefix + props.required_libs[i]
            };
            this.required_libs.push(obj);
      }
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template(
        this.testStyle + '.js', 
        path.join(this.testPath, this.testName + '.js')
      );
    }
  },

  install: function () {
  }
});
