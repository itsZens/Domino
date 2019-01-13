var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var Usernames = [];

function iniciar() {
	function onRequest(request, response) {
		var sortida;
		var pathname = url.parse(request.url).pathname;

		if(pathname != '/favicon.ico'){
			console.log("Petició per a  " + pathname + " rebuda.");
		}

		if (pathname == '/') {
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Login.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Login'){
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Login.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/serverDomino.js'){
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./serverDomino.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/js'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Domino'){
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Domino.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		}
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciat a http://localhost:8888");
}

function GetUsername (){
	var username = document.getElementById("inputUsername").value;
	var idUsername = 0;
	/*var objectUsername = {
		"id": idUsername,
		"username": username
	};*/
	console.log("El jugador " + username + " té l'ID " + idUsername);
	idUsername++;
	window.location.replace("/Domino");
}

exports.iniciar = iniciar;
