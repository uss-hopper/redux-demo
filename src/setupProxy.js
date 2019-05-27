const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(proxy('/apis', {
		logLevel: 'debug',
		target: 'https://bootcamp-coders.cnm.edu/~mbonacci/react-demo-backend/public_html/',
		changeOrigin: true,
		secure: true,

	}));
};