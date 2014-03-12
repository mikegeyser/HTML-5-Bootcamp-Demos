var Animal = function (){
	this.sound = "Silence";
};

Animal.prototype.getSound = function(){
	return this.sound;
};

var Dog = function(){
	this.sound = "Bark";
};

Dog.prototype.getSound = function(){
	Animal.prototype.getSound.apply(this, []);
}

var dog = new Dog();
dog.getSound();