(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var Game = Asteroids.Game = function (width, height) {
		this.asteroids = [];
		this.bullets = [];
		this.DIM_X = width;
		this.DIM_Y = height;
		this.NUM_ASTEROIDS = 4;
		this.addAsteroids();
		this.ship = this.addShip();
	}
	
	Game.prototype.step = function () {
		this.moveObjects();
		this.checkCollisions();
	}
	
	Game.prototype.addAsteroids = function () {
		while (this.asteroids.length < this.NUM_ASTEROIDS) {
			var asteroid = new Asteroids.Asteroid({pos: this.randomPosition(), game: this});
			this.add(asteroid);
		}
	}
	
	Game.prototype.addShip = function () {
		return new Asteroids.Ship({pos: this.randomPosition(), game: this});
	}
	
	Game.prototype.allObjects = function () {
		return this.asteroids.concat(this.ship).concat(this.bullets);
	}
	
	Game.prototype.randomPosition = function () {
		var xCoord = Math.random() * this.DIM_X;
		var yCoord = Math.random() * this.DIM_Y;
		return [xCoord, yCoord];
	}
	
	Game.prototype.draw = function (ctx) {
		ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
		
		var img = new Image();
		img.onload = function () {
			ctx.drawImage(img, 0, 0);
			this.allObjects().forEach (function (object) {
				object.draw(ctx);
			});
		}.bind(this);
		img.src = 'images/background.jpg';
	}
	
	Game.prototype.renderBackground = function (ctx) {
		debugger
		var img = new Image();
		img.onload = function () {
			ctx.drawImage(img, 0, 0)
		}
		img.src = 'images/background.jpg';
	}
	
	Game.prototype.moveObjects = function () {
		this.allObjects().forEach (function (object) {
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
		var allObjects = this.allObjects();
		
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
	
	Game.prototype.add = function (object) {
		if (object instanceof Asteroids.Asteroid) {
			this.asteroids.push(object);
		}
		
		if (object instanceof Asteroids.Bullet) {
			this.bullets.push(object);
		}
	}
	
	Game.prototype.remove = function (object) {
		if (object instanceof Asteroids.Asteroid) {
			var index = this.asteroids.indexOf(object);
			this.asteroids.splice(index, 1);
		}
		
		if (object instanceof Asteroids.Bullet) {
			var index = this.bullets.indexOf(object);
			this.bullets.splice(index, 1);
		}
	}
	
	Game.prototype.isOutOfBounds = function (pos) {
		if ((pos[0] < 0) || (pos[0] > this.DIM_X)) {
			return true;
		}
		
		if ((pos[1] < 0) || (pos[1] > this.DIM_Y)) {
			return true;
		}
		
		return false;
	}
	
})();