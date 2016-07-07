var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3'); //require('.greet3') is cached by node so the object is passed by reference
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4(); // constructor is invoked outside of the module
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();
