var Animal = function (){
	this.sound = "Silence";
	
	this.getSound = function(){
		return this.sound;
	};
};

var Dog = function(){
	this.sound = "Bark";
};

Dog.prototype = new Animal();
var dog = new Dog();
dog.getSound();

--------------------------

var animal = new Animal();

dog instanceof Dog;
dog instanceof Animal;
animal instanceof Dog;

--------------------------

var animal = {
	sound: "Silence",
	getSound: function(){
		return this.sound;
	}
}

var Dog = Object.create(animal, {
	sound: {
		value: "Bark",
		writable: true
	}
});
var dog = new Dog();
dog.getSound();
