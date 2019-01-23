/*
 * programa fa la gràfica d'una acció
 * @author sergi.grau@fje.edu
 * @version 1.0
 * date 23.01.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 23.01.2017
 * - programa inverteix una cadena utilitzant AJAX
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */
var id = 0;
var id_interval;
var pieces = [];
var playedPiece;

window.onload = function () {
    var xhr;
    var dada;
    document.getElementById("missatge").innerText = 'Searching for an opponent..'
    id_interval = setInterval(function () {
        //amb aixo creem el JSON amb les dades del servidor
        cridaAJAXinicial('/json?idJugador=' + id);
    }, 3000);
    var storedArray = JSON.parse(sessionStorage.getItem("items"));//no brackets
    var i;
    for (i = 0; i < storedArray.length; i++) {
        console.log(storedArray[i]);
    }

    document.getElementById('dropdownUser').innerHTML = storedArray[storedArray.length - 1];
};

//Crida AJAX que només s'executa al entrar a la pàgina
function cridaAJAXinicial(url) {
    xhr = new XMLHttpRequest();

    if (!xhr) {
        alert('problemes amb XHR');
        return false;
    }
    xhr.onreadystatechange = callbackAJAXinicial;
    xhr.open('POST', url, true); // el 3r paràmetre indica que és asíncron
    xhr.send(null);
}


//Callback AJAX que només s'executa al entrar a la pàgina
function callbackAJAXinicial() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            //dades = xhr.response;
            dada = JSON.parse(xhr.response);
            mostrarInici();
        } else {
            console.log('problemes amb l\'AJAX');
        }
    }

}


/**
 * Method that shows index page
 */
function mostrarInici() {
    var jugadors = dada.jugadors;
    id = dada.id;
    if(jugadors.length < 2){
        document.getElementById("missatge").innerText = 'PLEASE WAIT';
    } else if(jugadors.length == 2 && id != 0){
        document.getElementById("missatge").innerText = 'Opponent found!';
        document.getElementById("btnJugar").attributes.removeNamedItem("hidden");
        clearInterval(id_interval);
    } else if(jugadors.length == 2 && id == 0){
        document.getElementById("missatge").innerText = 'Game in progress... Please wait';
        //document.getElementById("btnJugar").attributes.addNamedItem("hidden");
        clearInterval(id_interval);
    }
}

function toGame() {
    document.getElementById("homeDiv").setAttribute("hidden","true");
    document.getElementById("dominoDiv").attributes.removeNamedItem("hidden");
    cridaAJAXJoc('/start?idJugador=' + id);
}
