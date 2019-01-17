window.onload = function () {
    var xhr;
    var dada;
    var interval;

    var id = 0;





};






function start(){
    Username = document.getElementById("inputUsername").value;

    cridaAJAXinicial('/json?Username='+Username);
    console.log(Username);

}








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
            //mostrarInici();
        } else {
            console.log('problemes amb l\'AJAX');
        }
    }


}
/*
function mostrarInici() {
var jugadors = dada.jugadors;
id = dada.id;
if(jugadors.length < 2){
    document.getElementById("missatge").innerText = "Wait please";
} else if(jugadors.length == 2 && id != 0){
    document.getElementById("missatge").innerText = "We have found a player!";
    document.getElementById("btnJugar").attributes.removeNamedItem("hidden");
    clearInterval(interval);
} else if(jugadors.length == 2 && id == 0) {
    document.getElementById("missatge").innerText = "Game full wait please..";
    //document.getElementById("btnJugar").attributes.addNamedItem("hidden");
    clearInterval(interval);
}
}*/

