(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#FF0000";
	var RADIUS = 20;
	
	var Asteroid = Asteroids.Asteroid = function (options) {
		options["vel"] = Asteroids.Util.randomVec(Math.random() * 2);
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
	};
	
	Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
	
	
	
})();