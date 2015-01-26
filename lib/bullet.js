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
		this.playNote();
	}
	
	Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
	
	Bullet.prototype.collideWith = function (otherObject) {
		if (otherObject instanceof Asteroids.Asteroid) {
			this.game.remove(otherObject);
			otherObject.playExplosion();
		}
	}
	
	Bullet.prototype.playNote = function () {
		var i = Math.floor(Math.random() * 5);
		if (i === 0) {
			var src = 'sounds/e.mp3'
		}
		if (i === 1) {
			var src = 'sounds/g.mp3'
		}
		if (i === 2) {
			var src = 'sounds/a.mp3'
		}
		if (i === 3) {
			var src = 'sounds/b.mp3'
		}
		if (i === 4) {
			var src = 'sounds/d2.mp3'
		}
		
		var sound = new Audio(src)
		sound.volume = 0.6
		sound.play();
	}
	
})();