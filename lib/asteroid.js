(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "00FF00";
	var RADIUS = 20;
	
	var Asteroid = Asteroids.Asteroid = function (options) {
		options["vel"] = Asteroids.Util.randomVec(Math.random() * 10);
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
	};
	
	Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
	
	
	
})();