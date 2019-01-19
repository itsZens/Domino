window.onload = function UsernameDropdown () {
    let xhr, dada, interval, id = 0;
    // document.getElementById('dropdownUser').innerHTML= localStorage.getItem("user");

    let storedArray = JSON.parse(sessionStorage.getItem("items"));//no brackets
    for (let i = 0; i < storedArray.length; i++) {
        console.log(storedArray[i]);
    }

    document.getElementById('dropdownUser').innerHTML = storedArray[storedArray.length-1];
    callbackAJAXinicial();
};


function getValueInputUsername(){
    let Username = document.getElementById("inputUsername").value;
    cridaAJAXinicial('/json?Username='+Username);
}


//Crida AJAX que només s'executa al entrar a la pàgina
function cridaAJAXinicial(url) {

    let xhr = new XMLHttpRequest();
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
    let xhr = new XMLHttpRequest();
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            dades = xhr.response;
            dada = JSON.parse(xhr.response);

            var testArray = [];
            testArray.push(Username);
            window.sessionStorage.setItem("items", JSON.stringify(testArray));

            //mostrarInici();
        } else {
            console.log('problemes amb l\'AJAX');
        }
    }
}


function mostrarInici() {
    var jugadors = dada.Username;
    id = dada.id;

    if(jugadors.length < 2){
        document.getElementById("message").innerText = "Searching for an opponent...";
    } else if(jugadors.length == 2 && id != 0){
        document.getElementById("message").innerText = "Opponent found!";
        //document.getElementById("btnJugar").attributes.removeNamedItem("hidden");
        clearInterval(interval);
    } else if(jugadors.length == 2 && id == 0) {
        document.getElementById("message").innerText = "Game full wait please..";
        //document.getElementById("btnJugar").attributes.addNamedItem("hidden");
        clearInterval(interval);
    }
}

