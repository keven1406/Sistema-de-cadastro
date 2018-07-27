const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/sistema-usuario'
mongoose.connect(dbURI)

mongoose.connection.on('connected', function () {
	console.log('O banco está conectado')
})

mongoose.connection.on('error', function (err) { 
	console.log('Aconteceu um erro:' + err)
})

mongoose.connection.on('disconnected', function () { 
	console.log('O banco desconectou!')
})

mongoose.connection.on('open', function () {
	console.log('O banco está aberto para uso.')
})

process.on('SIGINT', function () { 
	mangoose.connection.close(function () {
		console.log('Mongoose foi desconectado pelo usuario.')
		process.exit(0)
	})
})