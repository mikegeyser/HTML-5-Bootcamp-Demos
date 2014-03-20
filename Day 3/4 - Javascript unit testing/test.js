test( "Factory test", function() {
  var buildIsCalled = false;
  var carFactoryMock = function(){
  	this.build = function(){
  		buildIsCalled = true;
  		return new Car();
  	};
  };

  Factory.register("car", carFactoryMock);

  var car = Factory.build({ type:"car" });

  ok(buildIsCalled, "Build is called." );
  ok(car instanceof Car, "The car is a car!" );
});