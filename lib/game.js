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
		this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this});
		this.allObjects = this.allObjects();
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
	
	Game.prototype.addShip = function () {
		return new Asteroids.Ship({pos: this.randomPosition(), game: this});
	}
	
	Game.prototype.allObjects = function () {
		return this.asteroids.concat(this.ship);
	}
	
	Game.prototype.randomPosition = function () {
		var xCoord = Math.random() * this.DIM_X;
		var yCoord = Math.random() * this.DIM_Y;
		return [xCoord, yCoord];
	}
	
	Game.prototype.draw = function (ctx) {
		ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
		
		this.allObjects.forEach (function (object) {
			object.draw(ctx);
		});
	}
	
	Game.prototype.moveObjects = function () {
		this.allObjects.forEach (function (object) {
			object.move();
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
		var allObjects = this.allObjects;
		
		allObjects.forEach (function (obj1) {
			allObjects.forEach (function (obj2) {
				if (!(obj1 === obj2)) {
					if (obj1.isCollidedWith(obj2)) {
						obj1.collideWith(obj2);
					}
				}
			})
		})
	}
	
	Game.prototype.remove = function (object) {
		var index = this.allObjects.indexOf(object);
		this.allObjects.splice(index, 1);
	}
	
})();