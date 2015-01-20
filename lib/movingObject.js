(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var MovingObject = Asteroids.MovingObject = function (options) {
		this.pos = options["pos"];
		this.vel = options["vel"];
		this.radius = options["radius"];
		this.color = options["color"];
		this.game = options["game"];
		this.isWrappable = true;
	}
	
	MovingObject.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		
		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);
		
		ctx.fill();
	}
	
	MovingObject.prototype.move = function () {
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
		
		if (this.game.isOutOfBounds(this.pos)) {
			if (this.isWrappable) {
				this.game.wrap(this.pos)
			} else {
				this.game.remove(this);
			}
		}
	}
	
	MovingObject.prototype.isCollidedWith = function (otherObject) {
		var xDist = Math.abs(this.pos[0] - otherObject.pos[0]);
		var yDist = Math.abs(this.pos[1] - otherObject.pos[1]);
		var dist = Math.sqrt((xDist * xDist) + (yDist * yDist));
		
		if (dist < (this.radius + otherObject.radius)) {
			return true;
		} else {
			return false;
		}
	}
	
	MovingObject.prototype.collideWith = function (otherObject) {
		if (otherObject instanceof Asteroids.Ship) {
			
			if (otherObject.shielded === false) {
				otherObject.renderShield();
				this.game.hitPoints -= 1;
			} 
			
		}
	}
	
})();