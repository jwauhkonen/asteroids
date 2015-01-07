(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var Util = Asteroids.Util = {};
	
	var inherits = Util.inherits = function (childClass, superClass) {
		function Surrogate () {}
		Surrogate.prototype = superClass.prototype;
		childClass.prototype = new Surrogate();
	};
	
	var randomVec = Util.randomVec = function (length) {
		var x = Math.random() * length;
		var y = Math.sqrt((length * length) - (x * x));
		
		if ((Math.random() - 0.5) <= 0) {
			x = (0 - x);
		}
		
		if ((Math.random() - 0.5) <= 0) {
			y = (0 - y);
		}
		
		return [x, y];
	}
	
})();