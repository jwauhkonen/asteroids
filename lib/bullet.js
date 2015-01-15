(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	COLOR = "#000000";
	RADIUS = 5;
	
	var Bullet = Asteroids.Bullet = function (options) {
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this. options);
	}
	
	Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
	
})();