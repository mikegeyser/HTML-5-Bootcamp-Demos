
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