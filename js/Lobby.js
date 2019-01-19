window.onload = function () {


    // document.getElementById('dropdownUser').innerHTML= localStorage.getItem("user");
    document.getElementById("missatge").innerText = 'Searching for an opponent..';




    var storedArray = JSON.parse(sessionStorage.getItem("items"));//no brackets
    var i;
    for (i = 0; i < storedArray.length; i++) {
        console.log(storedArray[i]);
    }
    cridaAjaxLobby('/json?Username='+storedArray[storedArray.length - 1]);

    document.getElementById('dropdownUser').innerHTML = storedArray[storedArray.length - 1];
};

function cridaAjaxLobby(url){
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
function mostrarMessage() {
    let jugadors = dada.Username;
    let id = dada.id;
    alert(id);
    alert(jugadors);
    if(jugadors.length < 2){
        document.getElementById("missatge").innerText = 'PLEASE WAIT';
    } else if(jugadors.length == 2 && id != 0){
        document.getElementById("missatge").innerText = 'Opponent found!';
        document.getElementById("btnJugar").attributes.removeNamedItem("hidden");


    } else if(jugadors.length == 2 && id == 0){
        document.getElementById("missatge").innerText = 'Game in progress... Please wait';

        //document.getElementById("btnJugar").attributes.addNamedItem("hidden");

    }

}
