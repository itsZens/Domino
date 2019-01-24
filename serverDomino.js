var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var numPlayers = [];
var playedPieces = [];
var torn;
var player1Hand  =[];
var player2Hand  =[];
var pieces =  ["00","01","02","03","04","05","06","11","12","13","14","15","16", "22","23","24","25","26", "33","34","35",
	"36", "44","45","46", "55","56", "66"];
var torn;
repartirPeces(pieces);


function iniciar() {
	function onRequest(request, response) {
		let sortida;
		let pathname = url.parse(request.url).pathname;
		var consulta = url.parse(request.url, true).query;
		var nombre = consulta['caracter'];
		let imgPaths = '/Images/Fitxes/';

		if (pathname != '/favicon.ico' && pathname != '/serverDomino.js' && pathname != '/css/Index.css'
			&& pathname != '/Images/LogoDomino.png' && pathname != '/js/Lobby.js' && pathname != '/js/Game.js'
			&& pathname != '/css/Domino.css' && pathname != '/css/Scoreboards.css' && pathname != '/js/Scoreboards.js'
			&& pathname != '/Images/Trophy.png' && pathname != '/Images/SecondPrize.png' && pathname != '/Images/ThirdPrize.png'
			&& pathname != '/css/Lobby.css' && pathname != '/' && pathname != '/json' && pathname != '/js/Domino.js'
			&& pathname != pathname.includes(imgPaths) && pathname != '/js/scriptJoc.js' && pathname != '/updateTorn') {
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
		}else if (pathname == '/js/scriptJoc.js') {
			response.writeHead(200, {
				"Content-Type": "text/js; charset=utf-8"
			});

			fs.readFile('./js/scriptJoc.js', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'text/js'
				});
				response.write(sortida);
				response.end();
			});
		}
		else if (pathname == '/js/Game.js') {
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
			var id = consulta['idJugador'];
			var players = numPlayers.length;
			//var Username = consulta['Username'];

			if (id == 0 && players == 0) {
				id = 1;
				numPlayers.push(1);
			} else if (id == 0 && players == 1) {
				id = 2;
				numPlayers.push(2);
			} else {
				id;
			}
			console.log("Player " + id + " has logged in");
			//console.log("El jugador "+id+" ha entrat. Num players "+numPlayers.length);


			var objecteInicial = {
				"id": id,
				"jugadors": numPlayers
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
		} else if (pathname == '/Images/Fitxes/10.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/10.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/11.png') {
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
		} else if (pathname == '/Images/Fitxes/14.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/14.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/15.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/15.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/16.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/16.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}	else if (pathname == '/Images/Fitxes/20.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/20.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/21.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/21.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/22.png') {
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
		}else if (pathname == '/Images/Fitxes/24.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/24.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/25.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/25.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/26.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/26.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/30.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/30.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/31.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/31.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/32.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/32.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/33.png') {
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
		} else if (pathname == '/Images/Fitxes/34.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/34.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/35.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/35.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/36.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/36.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/40.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/40.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/41.png') {
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
		} else if (pathname == '/Images/Fitxes/45.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/45.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/46.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/46.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/50.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/50.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/51.png') {
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
		}  else if (pathname == '/Images/Fitxes/56.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/60.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/Images/Fitxes/60.png') {
			response.writeHead(200, {
				"Content-Type": "image/png; charset=utf-8"
			});

			fs.readFile('./Images/Fitxes/34.png', function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});
				response.write(sortida);
				response.end();
			});
		}else if (pathname == '/Images/Fitxes/61.png') {
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
		} else if (pathname == '/imatge') {
			response.writeHead(200, {
				"Content-Type": "text/html; charset=utf-8"
			});
			fs.readFile('./Images/Fitxes/'+ consulta['img'], function (err, sortida) {
				response.writeHead(200, {
					'Content-Type': 'image/png'
				});

				response.write(sortida);
				response.end();
			});
		} else if (pathname == '/start') {
			response.writeHead(200, {
				"Content-Type": "application/json charset=utf-8"
			});
			console.log("jugador " + consulta['idJugador']);

			var objecteJoc = {
				"id": consulta['idJugador'],
				"torn": 1,
				"pieces": [
					"00", "01", "02", "03", "04", "05", "06",
					"11", "12", "13", "14", "15", "16",
					"22", "23", "24", "25", "26",
					"33", "34", "35", "36",
					"44", "45", "46",
					"55", "56",
					"66"
				],
				"pieces1": player1Hand,
				"pieces2": player2Hand
			};
			response.write(JSON.stringify(objecteJoc));
			response.end();
		} else if (pathname == '/playedPiece') {
			response.writeHead(200, {
				"Content-Type": "text/xml; charset=utf-8"
			});
			torn = consulta['torn'];
			if (consulta['costat'] === "dropDre") {
				playedPieces.push(consulta['piece']);
			} else if (consulta['costat'] === "dropEsq") {
				playedPieces.unshift(consulta['piece']);
			}

			if (torn == 1) {
				torn = 2;
			} else if (torn == 2) {
				torn = 1;
			}

			var objecteTirada = {
				"id": consulta['idJugador'],
				"tirada": consulta['piece'],
				"correct": true,
				"torn": torn,
				"playedPieces": playedPieces
			};

			console.log("El jugador " + consulta['idJugador'] + " ha tirat " + consulta['piece']);
			response.write(JSON.stringify(objecteTirada));
			response.end();

		} else if (pathname == '/updateTorn') {
			response.writeHead(200, {
				"Content-Type": "text/xml; charset=utf-8"
			});
			var objecteUpdate = {
				"id": consulta['idJugador'],
				"torn": torn,
				"playedPieces": playedPieces
			};

			response.write(JSON.stringify(objecteUpdate));
			response.end();

		} else {
			response.writeHead(404, {
				"Content-Type": "text/html; charset=utf-8"
			});
			sortida = "404 NOT FOUND";
			response.write(sortida);
			response.end();
		}
	}

		http.createServer(onRequest).listen(8888);
		console.log("Server started at http://localhost:8888");

}
function repartirPeces(peces){
	var p =[];
	var p1 = [];
	var p2 = [];
	for(var i=0; i<peces.length;){
		k = Math.floor(Math.random() * peces.length);
		var numAlreadyIn = false;
		for(var j=0; j<p.length;j++){
			if(p[j] == k){
				numAlreadyIn = true;
				break;
			}else{
				numAlreadyIn = false;

			}
		}p.push(k);
		if(!numAlreadyIn) {
			if (i % 2 == 1){
				p1.push(k);
			}else if (i % 2 == 0) {
				p2.push(k);
			}

			i++;
		}
	}
	retornarPecesImg(p1,p2);
}



function retornarPecesImg(peces1,peces2) {
	for(var i= 0; i<7;i++){
		player1Hand[i] = pieces[peces1[i]];
	}

	for(var j= 0; j<7;j++){
		player2Hand[j] = pieces[peces2[j]];
	}
}

exports.iniciar = iniciar;
