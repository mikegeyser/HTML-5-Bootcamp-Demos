/*
	Build a simple hierarchical model for Vehicles using prototype inheritance. Include Cars, Bikes, and Trucks with the appropriate abstractions and attributes.  All of them can Drive and go "Vrrroooom!" when they do. Cars can take passengers. Trucks can carry Cargo. Do not model Passenger and Cargo, treat them as simple arrays.
*/

var Vehicle = function (){
	
	this.drive = function(){
		return "Vrrroooom!";
	};
}

var Car = function(){

	var passengers = [];

	this.passengers = function(){
		return passengers;
	};
}

Car.prototype = new Vehicle();

var Truck = function() {
	this.cargo = [];
}

Truck.prototype = new Vehicle();

var Bike = function(){ };
Bike.prototype = new Vehicle();

var car = new Car();
car.drive();