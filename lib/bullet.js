(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#BDFBFC";
	var RADIUS = 5;
	
	var Bullet = Asteroids.Bullet = function (options) {
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
		
		this.isWrappable = false;
	}
	
	Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
	
	Bullet.prototype.collideWith = function (otherObject) {
		if (otherObject instanceof Asteroids.Asteroid) {
			this.game.remove(otherObject);
		}
	}
	
})();