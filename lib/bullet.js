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
		this.note = this.randomNote();
		this.note.play();
	}
	
	Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
	
	Bullet.prototype.collideWith = function (otherObject) {
		if (otherObject instanceof Asteroids.Asteroid) {
			this.game.remove(otherObject);
		}
	}
	
	Bullet.prototype.randomNote = function () {
		var i = Math.floor(Math.random() * 8);
		if (i === 0) {
			return new Audio('sounds/d1.mp3');
		}
		if (i === 1) {
			return new Audio('sounds/e.mp3');
		}
		if (i === 2) {
			return new Audio('sounds/f.mp3');
		}
		if (i === 3) {
			return new Audio('sounds/g.mp3');
		}
		if (i === 4) {
			return new Audio('sounds/a.mp3');
		}
		if (i === 5) {
			return new Audio('sounds/b.mp3');
		}
		if (i === 6) {
			return new Audio('sounds/c.mp3');
		}
		if (i === 7) {
			return new Audio('sounds/d2.mp3');
		}
	}
	
})();