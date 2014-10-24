var express = require('express'),
    routes = require('./routes'),
    http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/foo', routes.foo.bar);

app.get('/users/:userid', routes.users.getUser);

app.get('/groups', routes.groups.findGroup);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});