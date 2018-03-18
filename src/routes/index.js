const {Router} = require('express');
const pkg = require('../../package');

class Routes {
    static configure(app) {
        app.get('/ping', (req, res) => res.send({version: pkg.version}));
        app.use('/api', require('./api')(Router()));
        app.use('/', require('./public-api')(Router()));
    }
}

module.exports = Routes;
