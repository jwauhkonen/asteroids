(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var NUM_ASTEROIDS = 4
	
	var Game = Asteroids.Game = function (width, height, images, el) {
		this.asteroids = [];
		this.bullets = [];
		this.DIM_X = width;
		this.DIM_Y = height;
		this.images = images;
		this.$el = el;
		this.num_asteroids = NUM_ASTEROIDS;
		this.addAsteroids();
		this.ship = this.addShip();
		this.hitPoints = 4;
		this.points = 0;
	}
	
	Game.prototype.step = function () {
		this.moveObjects();
		this.checkCollisions();
		this.addAsteroids();
		
		this.renderHeader();
	}
	
	Game.prototype.addAsteroids = function () {
		while (this.asteroids.length < this.num_asteroids) {
			var asteroid = new Asteroids.Asteroid({pos: this.edgePosition(), game: this});
			this.add(asteroid);
		}
	}
	
	Game.prototype.renderHeader = function () {
		var $hitPoints = $("#hit-points");
		var $points = $("#points");
		$hitPoints.html("Hit Points: " + this.hitPoints);
		$points.html("Score: " + this.points);
		
	}
	
	Game.prototype.addShip = function () {
		return new Asteroids.Ship({pos: this.centerPosition(), game: this});
	}
	
	Game.prototype.allObjects = function () {
		return this.asteroids.concat(this.ship).concat(this.bullets);
	}
	
	Game.prototype.randomPosition = function () {
		var xCoord = Math.random() * this.DIM_X;
		var yCoord = Math.random() * this.DIM_Y;
		return [xCoord, yCoord];
	}
	
	Game.prototype.edgePosition = function () {
		var side = Math.floor(Math.random() * 4);
		if (side === 0) {
			return([Math.random() * this.DIM_X, 0])
		}
		
		if (side === 1) {
			return([0, Math.random() * this.DIM_Y])
		}
		
		if (side === 2) {
			return([Math.random() * this.DIM_X, this.DIM_Y])
		}
		
		if (side === 3) {
			return([this.DIM_X, Math.random() * this.DIM_Y])
		}
	}
	
	Game.prototype.centerPosition = function () {
		return ([this.DIM_X / 2, this.DIM_Y / 2]);
	}
	
	Game.prototype.draw = function (ctx) {
		var img = new Image();
		img.src = this.images[0];
		
		ctx.drawImage(img, 0, 0);
		this.allObjects().forEach (function (object) {
			object.draw(ctx)
		})
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
			if (index >= 0) {
				this.asteroids.splice(index, 1);
			}
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