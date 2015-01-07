(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = Asteroid.COLOR = "00FF00";
	var RADIUS = Asteroid.RADIUS = 20;
	
	var Asteroid = Asteroids.Asteroid = function (options) {
		Asteroids.MovingObject.call(this, params);
		params["vel"] = randomVec(Math.random() * 10);
		params["color"] = COLOR;
		params["radius"] = RADIUS;
	};
	
	inherits(Asteroid, MovingObject);
	
	
	
})();