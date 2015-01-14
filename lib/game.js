(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var Game = Asteroids.Game = function (width, height) {
		this.asteroids = [];
		this.DIM_X = width;
		this.DIM_Y = height;
		this.NUM_ASTEROIDS = 4;
		this.addAsteroids();
	}
	
	Game.prototype.step = function () {
		this.moveObjects();
		this.checkCollisions();
	}
	
	Game.prototype.addAsteroids = function () {
		while (this.asteroids.length < this.NUM_ASTEROIDS) {
			var asteroid = new Asteroids.Asteroid({pos: this.randomPosition(), game: this});
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
	
	Game.prototype.wrap = function (pos) {
		if (pos[0] < 0) {
			pos[0] += this.DIM_X;
		}
		
		if (pos[0] > this.DIM_X) {
			pos[0] -= this.DIM_X;
		}
		
		if (pos[1] < 0) {
			pos[1] += this.DIM_Y;
		}
		
		if (pos[1] > this.DIM_Y) {
			pos[1] -= this.DIM_Y;
		}
	}
	
	Game.prototype.checkCollisions = function () {
		var asteroids = this.asteroids;
		
		asteroids.forEach (function (asteroid1) {
			asteroids.forEach (function (asteroid2) {
				if (!(asteroid1 === asteroid2)) {
					if (asteroid1.isCollidedWith(asteroid2)) {
						asteroid1.collideWith(asteroid2);
					}
				}
			})
		})
	}
	
	Game.prototype.remove = function (asteroid) {
		var index = this.asteroids.indexOf(asteroid);
		this.asteroids.splice(index, 1);
	}
	
})();