const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {
	getAll : (req, res)=>{
		User.find({})
		.then(result =>{
			res.send(result)
		})
		.catch(err =>{
			res.send(err)
		})
	},
	getDetail : (req, res)=>{
		User.findById(req.params.id)
		.then(result=>{
			res.send(result)
		})
		.catch(err=>{
			res.send(err)
		})
	},
	insert : (req, res)=>{
		// User.findOne({
		// 	username : req.body.username
		// })
		// .then(result=>{
		// 	console.log(!result)
		// 	if(!result){
		// 		console.log("masuk ke if")
				var insertUser = new User({
					name : req.body.name,
					email : req.body.email,
					username : req.body.username,
					password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
					role : req.body.role || 'user'
				})

				insertUser.save((error, response)=>{
					if(!error){
						res.send(response)						
					}else{
						res.send(error)
					}
				})
		// 	}else{
		// 		res.send("Username already exists")
		// 	}
		// })
		// .catch(err=>{
		// 	res.send(err)
		// })
	},
	delete : (req, res)=>{
		User.deleteOne({_id : req.params.id})
		.then((result)=>{
			res.send(result)
		})
		.catch(err=>{
			res.send(err)
		})
	},
	update : (req, res)=>{
		User.findById(req.params.id)
		.then(result=>{
			User.updateOne({
				name : req.body.name || result.name,
				email : req.body.email || result.email,
				username : req.body.username || result.username,
				password : req.body.password || result.password,
				role : req.body.role || result.role
			})
			.then(response=>{
				res.send(response)
			})
			.catch(error=>{
				res.send(error)
			})
		})
		.catch(err=>{
			res.send(err)
		})
	}
}