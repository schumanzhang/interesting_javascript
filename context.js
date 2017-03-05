//scope is variable access
//context refers to the value of 'this'

//"use strict"; //this prevents cluttering the root scope

//window object is root scope, window.a
var a = 1;
var c = 2;
var d = 2000;

function foo() {
    //child scope
    var b = 2;

    //scope conflict here
    var c = 3;
    //in here we can't access parent scope c unless window.c

    //looks in current scope, then parent scope to see which one it references
    //this is polluting the root scope
    d = 3000;
}

function bar() {
    c = 6;
    console.log(c);
}

foo();
bar();
console.log(b); //b is undefined
console.log(c); //c will be 3
console.log(d); //d will be 3000;

//******************************************
//context, value of this
console.log(this === window); //this returns true

function one() {
    //scope changes but NOT context
    console.log(this); // also returns the window object
}

one(); //funtion runs the in the context of the object it sits in
window.one();


var obj = {
    foo: function(one, two, three) {
        console.log(this === obj); //this returns true, context has changed, foo sits inside obj
    }
}

obj.foo();

//methods of changing context: call, apply and bind

obj.foo.call(window, 1, 2, 3); //changes context to window

obj.foo.apply(window, [1, 2, 3]); //apply is same as call but takes 2 arguments only

var myBoundFoo = obj.foo.bind(window);
myBoundFoo(); //this will run obj.foo WITH the context of window

//A JQuery example on context
$('body').on('click', obj.foo); //context will change to element clicked on!

$('#opendiv').on('click', function() {
    $('#div1').slideToogle(200, function() {
        $(this).toggleClass('active');
    }.bind(this));  //example of using bind to change context of the callback
});








