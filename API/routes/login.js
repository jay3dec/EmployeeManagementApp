const models = require('../models/index')

module.exports = {
	validate_login: function(req, res){
		models.User.findOne({
			where: {
			    authorId: 2
			}
		})
		.then(function(response){
			res.status(200).send({
				message : 'username is ' + req.body.username
			})
		})
	}
}