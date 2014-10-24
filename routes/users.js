exports.getUser = function(req, res) {
	console.log(req.params.userid);
	var json = {
		"name": "Ted"
	};
	res.json(json);
};