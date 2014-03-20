// Tip 1: Math.random()
// Tip 2: Singleton.instance() === Singleton.instance() (I think :P, maybe ==...)

// IIFE
var Singleton = (function(ns){
	var random;

	return {
		instance: function(){
			if(!random){
				random = Math.random();
			}

			return random;
		}
	};
})();

Singleton.instance();