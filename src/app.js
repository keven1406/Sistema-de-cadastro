require('./config')
//importando modulos.
const http = require('http')
const mongoose = require('mongoose')
const url = require('url')
const fs = require('fs')
const confirmacao = fs.readFileSync('./comprovacao.html')

//importando schema
const Schema = require('./schema')

//criando servidor
http.createServer(function (req, res) {
		const result = url.parse(req.url, true)
		const data = {};
		for (let event in result.query) {
			data[event] = result.query[event]
		}
		const dataInString = JSON.stringify(data)

		//---------------------------------------------

		//criando usuario
		const userModel = mongoose.model('usuario', Schema)

		console.log('dados:', dataInString)
		const usuario = new userModel(JSON.parse(dataInString))

		usuario.save(function (err, data) {
			if (err) return console.log('Aconteceu um erro inesperado: ', err)
			res.write(confirmacao)
			res.end()
		})

	
}).listen(3000, function () {
	console.log('Servidor rodando na porta 3000')
})