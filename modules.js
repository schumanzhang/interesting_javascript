//IIFEs General
var myApp = {};
(function() {
    console.log('hello world');
    //var 1 is shielded from global namespace, so is the helper method
    var var1 = 'Johnny';
    function helper() {
        console.log("I'm helping...");
    }

    myApp.sayGoodbye = function() {
        help();
        console.log('goodbye');
    };

})(args);

//IIFE with Jquery, exposing some function within
var x = (function($) {
    var message = "this is the greatest message";

    function x() {
        alert(message);
    }

    return x;

})(JQuery);

x();

var obj = (function($) {
    var message = "X called here";

    function x() {
        alert(message);
    }

    return {"x": x};

})(JQuery);

obj.x();

//*****************************
//AMD, CommonJS and UMD

//AMD - RequireJS - Module Foo with multiple dependencies, file name foo.js
define(['jquery', 'underscore'], function($, _) {

    function a() {};
    function b() {};
    function c() {};

    return {
        b: b,
        c: c
    }
});

//CommonJS - Module Foo with multiple dependencies, file name foo.js
var $ = require('jquery');
var _ = require('underscore');

function a() {};
function b() {};
function c() {};

module.exports = {
    b: b,
    c: c
}

//UMD supports both AMD and CommonJS
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //these modules have their own scope
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
    
}));



