function Animal(){
	var sound = "Silence";
	
	this.getSound = function(){
		return sound;
	};
}

Animal.createNew = function(){
	return new Animal();	
};

var animal = new Animal();
animal.getSound();