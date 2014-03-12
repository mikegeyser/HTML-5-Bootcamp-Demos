var animal = {
	makeSound: function(){
		return "The animal makes no sound..";
	}
};


function Animal(){
	this.makeSound = function(){
		return "The animal makes no sound..";
	};
}

var animal = new Animal();
animal.makeSound();