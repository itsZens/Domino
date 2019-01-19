var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var Usernames = [];

function iniciar() {
	function onRequest(request, response) {
		let sortida;
		let pathname = url.parse(request.url).pathname;
		let imgPaths = '/Images/Fitxes/';

		if (pathname != '/favicon.ico' && pathname != '/serverDomino.js' && pathname != '/css/Index.css'
			&& pathname != '/Images/LogoDomino.png' && pathname != '/js/Lobby.js' && pathname != '/js/Game.js'
			&& pathname != '/css/Domino.css' && pathname != '/css/Scoreboards.css' && pathname != '/js/Scoreboards.js'
			&& pathname != '/Images/Trophy.png' && pathname != '/Images/SecondPrize.png' && pathname != '/Images/ThirdPrize.png'
			&& pathname != '/css/Lobby.css' && pathname != '/' && pathname != '/json' && pathname != '/js/Domino.js'
			&& pathname != pathname.includes(imgPaths)) {
			console.log("Request for " + pathname + " received.");
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
		} else if (pathname == '/Index') {
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
		} else if (pathname == '/serverDomino.js') {
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
		} else if (pathname == '/css/Index.css') {
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
		} else if (pathname == '/Images/LogoDomino.png') {
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
		} else if (pathname == '/Lobby') {
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
		} else if (pathname == '/js/Lobby.js') {
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./js/Lobby.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/js'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/js/Game.js') {
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./js/Game.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/js'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Scoreboards') {
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});

			fs.readFile('./Scoreboards.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Domino') {
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./Domino.html', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/css/Domino.css') {
			response.writeHead(200, {
				"Content-Type": "text/css; charset=utf-8"
			});

			fs.readFile('./css/Domino.css', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/css/Scoreboards.css') {
			response.writeHead(200, {
				"Content-Type": "text/css; charset=utf-8"
			});

			fs.readFile('./css/Scoreboards.css', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/js/Scoreboards.js') {
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./js/Scoreboards.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/js'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Trophy.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Trophy.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/SecondPrize.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/SecondPrize.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/ThirdPrize.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/ThirdPrize.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/css/Lobby.css') {
			response.writeHead(200, {
				"Content-Type": "text/css; charset=utf-8"
			});

			fs.readFile('./css/Lobby.css', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/json') {
			response.writeHead(200, {

				"Content-Type": "application/json charset=utf-8"
			});

			var consulta = url.parse(request.url, true).query;
			var Username = consulta['Username'];
			var id = Usernames.length;

			Usernames.push(Username);
			console.log("Player " + Username + " has logged in");

			var objecteInicial = {
				"id": id,
				"Username": Usernames
			};
			response.write(JSON.stringify(objecteInicial));
			response.end();

		} else if (pathname == '/js/Domino.js') {
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./js/Domino.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/js'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/00.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/00.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/01.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/01.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/02.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/02.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/03.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/03.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/04.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/04.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/05.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/05.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/06.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/06.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/11.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/11.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/12.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/12.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/13.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/13.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/22.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/22.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/23.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/23.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/33.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/33.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/41.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/41.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/42.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/42.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/43.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/43.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/44.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/44.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/51.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/51.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/52.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/52.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/53.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/53.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/54.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/54.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/55.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/55.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/61.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/61.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/62.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/62.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/63.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/63.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/64.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/64.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/65.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/65.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/66.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/66.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/Reverse.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/Reverse.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}
	}

		http.createServer(onRequest).listen(8888);
	console.log("Server started at http://localhost:8888");
}


exports.iniciar = iniciar;