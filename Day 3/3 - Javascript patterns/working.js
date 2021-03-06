// Factory pattern
// - Factory Method
// - Abstract Factory

var Vehicle = function (){
			
	this.drive = function(){
		return "Vrrroooom!";
	};
}

var Car = function() {
	this.passengers = [];
};
Car.prototype = new Vehicle();

var Truck = function() {
	this.cargo = [];
};
Truck.prototype = new Vehicle();

var CarFactory = function(){
	this.build = function(specification){
		return new Car();
	};
};

var TruckFactory = function(){
	this.build = function(specification){
		return new Truck();
	};
};

var Factory = function(){
	var factories = {};

	var register = function(key, factory){
		factories[key] = new factory();
	};

	var build = function(specification){
		if(!specification || !specification.type)
			return;

		return factories[specification.type].build();
	};

	return {
		register: register,
		build: build
	};
}();

Factory.register("car", CarFactory);
Factory.register("truck", TruckFactory);

var car = Factory.build({
	type: "car"
});

car instanceof Car;

