var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var Usernames = [];

function iniciar() {
	function onRequest(request, response) {
		var sortida;
		var pathname = url.parse(request.url).pathname;

		if(pathname != '/favicon.ico' && pathname != '/serverDomino.js' && pathname != '/css/Index.css'
            && pathname != '/Images/LogoDomino.png' && pathname != '/js/Lobby.js'
            && pathname != '/css/Domino.css' && pathname != '/css/Scoreboards.css' && pathname != '/js/Scoreboards.js'
            && pathname != '/Images/Trophy.png' && pathname != '/Images/SecondPrize.png' && pathname != '/Images/ThirdPrize.png'
            && pathname != '/css/Lobby.css'){
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
		} else if (pathname == '/js/Lobby.js'){
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
		} else if (pathname == '/Scoreboards'){
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
		} else if (pathname == '/Domino'){
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
        } else if (pathname == '/css/Domino.css'){
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
        } else if (pathname == '/css/Scoreboards.css'){
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
        } else if (pathname == '/js/Scoreboards.js'){
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
        } else if (pathname == '/Images/Trophy.png'){
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
        } else if (pathname == '/Images/SecondPrize.png'){
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
        } else if (pathname == '/Images/ThirdPrize.png'){
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
        } else if (pathname == '/css/Lobby.css'){
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
        }else if (pathname == '/json'){
			response.writeHead(200, {

				"Content-Type": "application/json charset=utf-8"
			});

			var consulta = url.parse(request.url, true).query;
			var Username = consulta['Username'];
			var id = Usernames.length;


			Usernames.push(Username);

			console.log("El jugador "+Username+" ha entrat..");

			var objecteInicial = {
				"id": id,
				"Username" : Usernames
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
