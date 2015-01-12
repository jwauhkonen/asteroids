(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var DIM_X = 600;
	var DIM_Y = 400;
	var NUM_ASTEROIDS = 20;
	
	var Game = Asteroids.Game = function () {
		this.asteroids = [];
		this.addAsteroids();
	}
	
	Game.prototype.addAsteroids = function () {
		while (this.asteroids.length < 20) {
			var asteroid = new Asteroids.Asteroid({pos: this.randomPosition()});
			this.asteroids.push(asteroid);
		}
	}
	
	Game.prototype.randomPosition = function () {
		var xCoord = Math.random() * DIM_X;
		var yCoord = Math.random() * DIM_Y;
		return [xCoord, yCoord];
	}
	
	Game.prototype.draw = function (ctx) {
		ctx.clearRect(0, 0, DIM_X, DIM_Y);
		
		this.asteroids.forEach (function (asteroid) {
			asteroid.draw(ctx);
		});
	}
	
	Game.prototype.moveObjects = function () {
		this.asteroids.forEach (function (asteroid) {
			asteroid.move();
		})
	}
	
})();