(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var Game = Asteroids.Game = function (width, height) {
		this.asteroids = [];
		this.DIM_X = width;
		this.DIM_Y = height;
		this.NUM_ASTEROIDS = 20;
		this.addAsteroids();
	}
	
	Game.prototype.addAsteroids = function () {
		while (this.asteroids.length < this.NUM_ASTEROIDS) {
			var asteroid = new Asteroids.Asteroid({pos: this.randomPosition()});
			this.asteroids.push(asteroid);
		}
	}
	
	Game.prototype.randomPosition = function () {
		var xCoord = Math.random() * this.DIM_X;
		var yCoord = Math.random() * this.DIM_Y;
		return [xCoord, yCoord];
	}
	
	Game.prototype.draw = function (ctx) {
		ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
		
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