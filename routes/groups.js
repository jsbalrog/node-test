exports.findGroup = function(req, res) {
	console.log(req.query['q']);
	res.end(req.query['q']);
};