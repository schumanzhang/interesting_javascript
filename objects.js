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