(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var GameView = Asteroids.GameView = function (game, ctx) {
		this.game = game;
		this.ctx = ctx;
		this.start();
	}
	
	GameView.prototype.start = function () {
		
		window.setInterval((function () {
			this.game.step();
			this.game.draw(this.ctx);
		}).bind(this), 20);
		
		this.bindKeyHandlers();
	}
	
	GameView.prototype.bindKeyHandlers = function () {
		key('w', function() {
			this.game.ship.power()
		}.bind(this))
		
		key('s', function() {
			this.game.ship.reverse()
		}.bind(this))
		
		key('a', function() {
			this.game.ship.turn(-0.2)
		}.bind(this))
		
		key('d', function() {
			this.game.ship.turn(0.2)
		}.bind(this))
		
		key('space', function() {
			this.game.ship.fireBullet();
		}.bind(this))
	}
	
})();