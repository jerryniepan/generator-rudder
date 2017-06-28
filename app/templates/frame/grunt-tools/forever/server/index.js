var serveIndex = require('serve-index');

var staticServer = function(app, express, dirPath) {
    var viewPath = dirPath ;//+ '/page';

    app.set('view engine', 'jade');
    app.use('/', express.static(viewPath));
    app.use('/',serveIndex(viewPath));
};

var server = function(config) {
    
    var express = config.express;
    var port = config.port || 3000;
    var dirPath = config.dirPath;

    var app = express();

    staticServer(app, express, dirPath);
    app.listen(port, function() {
        console.log('localhost:' + port);
    });
};

module.exports = server;
