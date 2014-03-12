// Factory Pattern
// - Factory Method Pattern (tick)
// - Abstract Factory Pattern


var Vehicle = function() {
	this.drive = function(){
		return "Vrrooooom!!!";
	}
};

var Car = function(passengers) {
	this.passengers = passengers || [];
};
Car.prototype = new Vehicle();

var Truck = function(cargo) {
	this.cargo = [];
};
Truck.prototype = new Vehicle();

var CarFactory = function() {
	this.build = function(specification) {
		return new Car(specification.passengers);
	};
};

var TruckFactory = function() {
	this.build = function(specification) {
		return	new Truck(specification.cargo);
	};
};


var Factory = (function(){
	var factories = {};

	var register = function(type, factory){
		factories[type] = new factory();
	};

	var build = function build(specification){
		if (!specification)
			return;		

		if (!specification.type)
			return;

		return factories[specification.type].build(specification);
	};

	return {
		build: build,
		register: register
	};
})();

Factory.register("car", CarFactory);
Factory.register("truck", TruckFactory);

Factory.init();
Factory.build({
	type: "car"
});
