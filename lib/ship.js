(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var COLOR = "#74D9E8";
	var RADIUS = 20;
	
	var Ship = Asteroids.Ship = function (options) {
		options["vel"] = [0, 0];
		options["color"] = COLOR;
		options["radius"] = RADIUS;
		Asteroids.MovingObject.call(this, options);
		
		this.radAngle = 0;
		this.direction = [1, 0];
		this.shielded = false;
		this.showShield = false;
		this.destroyed = false;
		this.bulletReady = true;
	}
	
	Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
	
	
	Ship.prototype.draw = function (ctx) {
		var img = new Image();
		img.src = this.game.images[1];
		
		this.drawRotated(ctx, img);
		
		if (this.shielded === true) {
			
			if (this.showShield) {
				ctx.fillStyle = this.color;
				ctx.beginPath();
	
				ctx.arc(
					this.pos[0],
					this.pos[1],
					this.radius + 5,
					0,
					2 * Math.PI,
					false
				);
	
				ctx.fill();
			}
		}
	}
	
	Ship.prototype.renderShield = function () {
		this.shielded = true
		
		window.setTimeout((function () {
			this.shielded = false;
		}.bind(this)), 3000)
		
		window.setInterval((function () {
			if (this.showShield) {
				this.showShield = false;
			} else {
				this.showShield = true;
			}
		}.bind(this)), 60);	
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
		this.vel[0] += this.direction[0] / 16;
		this.vel[1] += this.direction[1] / 16;
	}
	
	Ship.prototype.reverse = function () {
		this.vel[0] -= this.direction[0] / 16;
		this.vel[1] -= this.direction[1] / 16;
	}
	
	Ship.prototype.turn = function (shift) {
		this.radAngle += shift;
		this.direction[0] = Math.cos(this.radAngle)
		this.direction[1] = Math.sin(this.radAngle)
		console.log(this.direction);
	}
	
	Ship.prototype.fireBullet = function () {
		if (!this.destroyed) {
			if (this.bulletReady) {
				var bulletVel = [this.direction[0] * 3, this.direction[1] * 3];
				var bulletPos = [this.pos[0], this.pos[1]];
				var bullet = new Asteroids.Bullet({vel: bulletVel, pos: bulletPos, game: this.game});
				this.game.add(bullet);
				this.reload();
			}
		}
	}
	
	Ship.prototype.reload = function () {
		this.bulletReady = false;
		var reloadTime = (Math.random() * 500)
		window.setTimeout(( function() {
			this.bulletReady = true;
		}.bind(this)), reloadTime);
	}
	
	Ship.prototype.playShieldNoise = function () {
		var sound = new Audio('sounds/shield-noise.mp3');
		sound.volume = 0.1;
		sound.play();
	}
	
})();