var host;

module("Host", {
  setup: function(){
    host = new Pretender.Host();
  }
});

test("Pretender.Host exists", function () {
	ok(Pretender.Host);
});

test("new Pretender.Host() can be called", function () {
	var host = new Pretender.Host();
	ok(host);
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

test("Pretender server's default host is initially null by default", function () {
	var server = new Pretender();
	ok(!server._defaultHost);
});