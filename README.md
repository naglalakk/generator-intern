generator-intern
================

What is it?
-----------
generator-intern is a test scaffolder for the intern test framework.
See more information about intern here:
[Intern](https://github.com/theintern/intern/wiki)

With this generator you can choose between test style (bdd, tdd, object)
and weither your test should be a unit test or a functional test.

Installation
------------

    npm install -g generator-intern

Usage
-----

    yo intern

What it does not include
------------------------
This generator does absolutely nothing with intern's config file.
This is up to you to fill in. Config files can vary from person
to person and I have no idea what you are into.
So for now you will have to fill in the modules that are suppose
to be included in your tests.
This might be supported in the future but the aim with this
generator is simply to provide a quick way to generate tests.

Prompt
------

    name: Name of the test (.js will be added as extension)
    testType:  unit | functional
    testStyle: bdd | tdd | object
    assertion libs(chai): assert | expect | should
    testPath: path to store test

Testing
-------
Mocha is used to test this generator. If you don't have mocha installed,
install it with
    
    npm install -g mocha

and then run tests with

    mocha
