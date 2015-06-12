var host;

module("Host | Unit", {
  setup: function(){
    host = new Pretender.Host();
  }
});

test("has a 'verbs' property", function () {
	ok(host.verbs);
});


test("supports all HTTP verbs", function () {
	var verbs = ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'];
	for (var v = 0; v < verbs.length; v++) {
		ok(host.verbs[verbs[v]], 'supports ' + verbs[v]);
	}
});

test("supports registry of requests", function () {
	host.get('/abcd', function () {
		return [200, {}, JSON.stringify({status: 'ok'})];
	});
	equal(host.verbs.GET.recognize('/abcd').length, 1, 'Route has been registered');
});
