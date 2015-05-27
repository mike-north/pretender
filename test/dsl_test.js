module("DSL", {});

test('Single-host Pretender DSL', function () {
	var server = new Pretender(function () {
		this.get('/api/songs/:id', function () {
			return [200, {}, ""];
		}, false);
	});

	$.get('/api/songs/47').then(function() {
		ok(true, 'Success callback should have been called');
		server.shutdown();
	});
});