//3 ways of creating objects

//****** this shows prototypical inheritance, constructor method
function Animal(name, weight, sound) {
    this.name = type;
    this.weight = weight;
    this.sound = sound;
}

Animal.prototype.getName = function() {
    return this.name;
}

function Mammal(name, weight, sound, hasHair) {
    //use parent constructor here
    Animal.call(this, name, weight, sound);
    
    this.hasHair = hasHair;
}

// Inherit the Animal prototype
Mammal.prototype = Object.create(Animal.prototype);

// Set the Mammal constructor to 'Mammal'
Mammal.prototype.constructor = Mammal;

Mammal.prototype.getHasHair = function() {
    return this.hasHair;
}

//Inherit the Mammal prototype
function Dog(name, weight, sounds, hasHair, breed) {

    Mammal.call(this, name, weight, sound, hasHair);

    this.breed = breed;
}

// Inherit the Mammal prototype
Dog.prototype = Object.create(Mammal.prototype);

// Set the Dog constructor to 'Dog'
Dog.prototype.constructor = Dog;

Dog.prototype.getBreed = function() {
    return this.breed;
}

//create a Dog

var fido = new Dog('Fido', 4.5, 'woof', true, 'Lab');
fido.getName();  // 'Fido'
fido.getHasHair(); // true
fido.getBreed(); // 'Lab'



//******** Object literals, these are singletons
var someObj = {
    x: 0,
    y: 0,
    z: 0,
    add: function () {
        return this.x + this.y + this.z;
    }
};



//******** The following is called the factory pattern
var Car = function(){
    var car = {
        toggleEngine: toggleEngine
    };

    car.running = false;

    function toggleEngine() {
        this.running = !this.running;
    }

    return car;
};

car1 = Car(); 
car2 = Car(); 
car1.toggleEngine();


/** Object Methods!! */

/* The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
 It will return the target object. */
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }

/*The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.*/
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});

/*The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, */



/* deep copies */




/*** Traversing javascript objects */

var myObject = { 'a': 1, 'b': 2, 'c': 3 }

Object.keys(myObject).map(function(key, index) {
   myObject[key] *= 2;
});

console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }