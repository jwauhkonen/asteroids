(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#0000FF";
	var RADIUS = 10;
	
	var Ship = Asteroids.Ship = function (options) {
		options["vel"] = [0, 0];
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
		
		this.radAngle = 0;
		this.direction = [1, 0];
	}
	
	Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
	
	
	Ship.prototype.relocate = function () {
		this.pos = this.game.randomPosition();
		this.vel = [0, 0];
	}
	
	Ship.prototype.power = function () {
		this.vel[0] += this.direction[0] / 4;
		this.vel[1] += this.direction[1] / 4;
	}
	
	Ship.prototype.reverse = function () {
		this.vel[0] -= this.direction[0] / 4;
		this.vel[1] -= this.direction[1] / 4;
	}
	
	Ship.prototype.turnLeft = function () {
		this.radAngle -= 0.2;
		this.direction[0] = Math.cos(this.radAngle)
		this.direction[1] = Math.sin(this.radAngle)
		console.log(this.direction);
	}
	
	Ship.prototype.turnRight = function () {
		this.radAngle += 0.2;
		this.direction[0] = Math.cos(this.radAngle)
		this.direction[1] = Math.sin(this.radAngle)
		console.log(this.direction);
	}
	
	Ship.prototype.fireBullet = function () {
		var bulletVel = [this.direction[0] * 2, this.direction[1] * 2];
		var bulletPos = [this.pos[0], this.pos[1]];
		var bullet = new Asteroids.Bullet({vel: bulletVel, pos: bulletPos, game: this.game});
		this.game.add(bullet);
	}
	
})();