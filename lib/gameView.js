(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var GameView = Asteroids.GameView = function (game, ctx) {
		this.game = game;
		this.ctx = ctx;
		this.bindKeyHandlers();
		this.start();
	}
	
	GameView.prototype.start = function () {
		window.setInterval((function () {
			this.game.step();
			this.game.draw(this.ctx);
		}).bind(this), 20);
	}
	
	GameView.prototype.bindKeyHandlers = function () {
		key('w', function() {
			this.game.ship.power([0, -0.5])
		}.bind(this))
		
		key('s', function() {
			this.game.ship.power([0, 0.5])
		}.bind(this))
		
		key('a', function() {
			this.game.ship.power([-0.5, 0])
		}.bind(this))
		
		key('d', function() {
			this.game.ship.power([0.5, 0])
		}.bind(this))
	}
	
})();