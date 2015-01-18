(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#0000FF";
	var RADIUS = 20;
	
	var Ship = Asteroids.Ship = function (options) {
		options["vel"] = [0, 0];
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
		
		this.radAngle = 0;
		this.direction = [1, 0];
	}
	
	Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
	
	
	Ship.prototype.draw = function (ctx) {
		var img = new Image();
		img.src = this.game.images[1];
		
		this.drawRotated(ctx, img);
	}
	
	Ship.prototype.drawRotated = function (ctx, img) {
		ctx.save();
		ctx.translate(this.pos[0], this.pos[1]);
		ctx.rotate(this.radAngle);
		ctx.drawImage(img, -(this.radius), -(this.radius), this.radius * 2, this.radius * 2);
		ctx.restore();
	}
	
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
	
	Ship.prototype.turn = function (shift) {
		this.radAngle += shift;
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