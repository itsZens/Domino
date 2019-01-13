/*
 * Aplicació amb Node.js HTTP que permet recuperar una imatge per AJAX
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 12.12.16
 * format del document UTF-8
 *
 * CHANGELOG
 * 12.12.16
 * - Aplicació amb Node.js HTTP que permet recuperar una imatge per AJAX
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var numPlayers = [];
var playedPieces = [];

function iniciar() {
	function onRequest(request, response) {
		var sortida;
		var pathname = url.parse(request.url).pathname;
		var consulta = url.parse(request.url, true).query;
		var nombre = consulta['caracter'];

		if (nombre != undefined )
			nombre = nombre.charCodeAt(0);
		console.log("Petició per a  " + pathname + " rebuda.");

		if (pathname == '/home') {
			fs.readFile('./M01_domino.html', function(err, sortida) {
				response.writeHead(200, {
					"Content-Type": "text/html; charset=utf-8"
				});
				response.write(sortida);
				response.end();
			});

		} else if (pathname == '/css/style.css') {
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./css/style.css', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});

				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Game.js') {
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Game.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});

				response.write(sortida);
				response.end();
			});


		}else if (pathname == '/imatge') {
			fs.readFile('./Loscrimenesdegrindelwald.png', function(err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/index') {
			response.writeHead(200, {
				"Content-Type": "application/json charset=utf-8"
			});

			var players = numPlayers.length;
			var id = consulta['idJugador'];
			if (id == 0 && players == 0) {
				id = 1;
				numPlayers.push(1);
				//problemaaa
			} else if (id == 0 && players == 1) {
				id = 2;
				numPlayers.push(2);
			}/*else if(id != 0){
                id = 999;
            }*/ else {
				id;
			}
			console.log("El jugador " + id + " ha entrat. Num players " + numPlayers.length);

			var objecteInicial = {
				"id": id,
				"jugadors": numPlayers
			};

			response.write(JSON.stringify(objecteInicial));
			response.end();
		}else {
			response.writeHead(404, {
				"Content-Type": "text/html; charset=utf-8"
			});
			sortida = "404 NOT FOUND";
			response.write(sortida);
			response.end();
		}

	}


	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
