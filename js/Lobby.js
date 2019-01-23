var id = 0;
var id_interval;
var pieces = [];
var playedPiece;
window.onload = function () {


    // document.getElementById('dropdownUser').innerHTML= localStorage.getItem("user");
    document.getElementById("missatge").innerText = 'Searching for an opponent..';


    id_interval = setInterval(function () {
        //amb aixo creem el JSON amb les dades del servidor
        cridaAjaxLobby('/json?idJugador=' + id);
    }, 3000);
    var storedArray = JSON.parse(sessionStorage.getItem("items"));//no brackets
    var i;
    for (i = 0; i < storedArray.length; i++) {
        console.log(storedArray[i]);
    }

    document.getElementById('dropdownUser').innerHTML = storedArray[storedArray.length - 1];

};
    function cridaAjaxLobby(url) {
        xhr = new XMLHttpRequest();

        if (!xhr) {
            alert('problemes amb XHR');
            return false;

        }
        xhr.onreadystatechange = callbackAJAXLobby;
        xhr.open('POST', url, true); // el 3r paràmetre indica que és asíncron
        xhr.send(null);


    }

    function callbackAJAXLobby() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                dades = xhr.response;
                dada = JSON.parse(xhr.response);


                mostrarMessage();
            } else {
                console.log('problemes amb l\'AJAX');
            }
        }


    }

    /*function array(User) {

        let Usernames = [];
        Usernames.push(User);
        localStorage.setItem("quentinTarantino", JSON.stringify(Usernames));





    }*/
    function mostrarMessage() {

        var jugadors = dada.jugadors;
        id = dada.id;

function toGame() {
    document.getElementById("homeDiv").setAttribute("hidden","true");
    document.getElementById("dominoDiv").attributes.removeNamedItem("hidden");
    cridaAJAXJoc('/start?idJugador=' + id);
}
        if (jugadors.length < 2) {
            document.getElementById("missatge").innerText = 'PLEASE WAIT';



        } else if (jugadors.length == 2) {
            document.getElementById("missatge").innerText = 'Opponent found!';
            document.getElementById("btnJugar").attributes.removeNamedItem("hidden");

            clearInterval(id_interval);

            document.getElementById("btnJugar").attributes.removeNamedItem("hidden");
            clearInterval(id_interval);


        } else if (jugadors.length > 2) {
            document.getElementById("missatge").innerText = 'Game in progress... Please wait';
            clearInterval(id_interval);


            //document.getElementById("btnJugar").attributes.addNamedItem("hidden");

        }

    }

function toGame() {

    alert('hola');
    cridaAJAXJoc('/start?idJugador=' + id);
}
