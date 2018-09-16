const login = require('./login')

module.exports = {
	setup: function(app){
		app.post('/login', (req, res) => login.validate_login(req, res))
	}
}