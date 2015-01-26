(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#FF0000";
	var RADIUS = 40;
	
	var Asteroid = Asteroids.Asteroid = function (options) {
		options["vel"] = Asteroids.Util.randomVec(Math.random() * 2);
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
	};
	
	Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
	
	
	Asteroid.prototype.draw = function (ctx) {
		var img = new Image();
		img.src = this.game.images[2];
		ctx.drawImage(img, this.pos[0] - this.radius, this.pos[1] - this.radius);
	}
	
	Asteroid.prototype.playExplosion = function () {
		var i = Math.floor(Math.random() * 3);
		console.log(i)
		if (i === 0) {
			var src = 'sounds/explosion1.mp3';
		}
		if (i === 1) {
			var src = 'sounds/explosion2.mp3';
		}
		if (i === 2) {
			var src = 'sounds/explosion3.mp3';
		}
		
		var sound = new Audio(src);
		sound.volume = 0.4
		sound.play();
	}
	
})();