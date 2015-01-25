(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var GameView = Asteroids.GameView = function (game, ctx, images) {
		this.game = game;
		this.ctx = ctx;
		this.start();
	}
	
	GameView.prototype.start = function () {
		
		window.setInterval((function () {
			this.bindKeyHandlers();
			this.game.step();
			this.game.draw(this.ctx);
		}).bind(this), 20);
	}
	
	GameView.prototype.bindKeyHandlers = function () {
		var keys = key.getPressedKeyCodes();
		if (keys.indexOf(87) != -1) {
			this.game.ship.power()
		}
		
		if (keys.indexOf(83) != -1) {
			this.game.ship.reverse()
		}
		
		if (keys.indexOf(65) != -1) {
			this.game.ship.turn(-0.1)
		}
		
		if (keys.indexOf(68) != -1) {
			this.game.ship.turn(0.1)
		}
		
		if (keys.indexOf(32) != -1) {
			this.game.ship.fireBullet()
		}
		
	
	}
	
})();