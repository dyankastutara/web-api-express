const mongoose = require('mongoose')
const Schema = mongoose.Schema

var memoSchema = new Schema({
	memo : {type : String, required : true},
	user : {type : Schema.Types.ObjectId, ref : 'User'}
})

var Memo = mongoose.model('Memo', memoSchema)
module.exports = Memo