(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#0000FF";
	var RADIUS = 10;
	
	var Ship = Asteroids.Ship = function (options) {
		options["vel"] = [0, 0];
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
	}
	
	Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
	
	
	
})();