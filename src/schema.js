const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/sistema-usuario')

const Schema = mongoose.Schema

const _schema = {
	name: String,
	password: String,
	email: String,
	created_at: { type: Date, default: Date.now }
}

console.log(_schema)

const usuarios = new Schema(_schema)

module.exports = usuarios