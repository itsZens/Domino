var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var Usernames = [];




function iniciar() {
	function onRequest(request, response) {
		var sortida;
		var pathname = url.parse(request.url).pathname;
		var consulta = url.parse(request.url, true).query;
		var nombre = consulta['caracter'];
		if (nombre != undefined )

		console.log("Petició per a  " + pathname + " rebuda.");
		if(pathname != '/favicon.ico' && pathname != '/serverDomino.js' && pathname != '/css/Index.css' && pathname != '/Images/LogoDomino.png'){
			console.log("Petició per a  " + pathname + " rebuda.");
		}

		if (pathname == '/') {
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Index.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Index'){
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Index.html', function (err, sortida) {
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
		} else if (pathname == '/css/Index.css'){
			response.writeHead(200, {
				"Content-Type": "text/css; charset=utf-8"
			});

			fs.readFile('./css/Index.css', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/LogoDomino.png'){
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/LogoDomino.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Lobby'){
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Lobby.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/index') {
			response.writeHead(200, {
				"Content-Type": "application/json charset=utf-8"
			});
			for(var i =0; i> Usernames.length;i++);
			var players = Usernames.length;
			var id;
			var nameJugador = consulta['nomJugador'];
			if(nameJugador === players[i]){
				id = i ;
				Usernames.push(Usernames[i]);
				//problemaaa
			}else {
				alert(ERROR);
			/*else if(id != 0){
                id = 999;
            }*/
			}
			console.log("El jugador "+Usernames[i]+" ha entrat. Num players "+id);

			var objecteInicial = {
				"id" : id,
				"jugadors": Usernames[i]
			};

			response.write(JSON.stringify(objecteInicial));
			response.end();
		}
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciat a http://localhost:8888");
}

/*function setCookieUser (){
	var username = ;

}*/

exports.iniciar = iniciar;
