
function start(){
    Username = document.getElementById("inputUsername").value;
    var testArray = [];
    testArray.push(Username);
    window.sessionStorage.setItem("items", JSON.stringify(testArray));


}




//Crida AJAX que només s'executa al entrar a la pàgina
/*function cridaAJAXinicial(url) {

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
            dades = xhr.response;
            dada = JSON.parse(xhr.response);

            var testArray = [];
            testArray.push(Username);
            window.sessionStorage.setItem("items", JSON.stringify(testArray));

            mostrarInici();
        } else {
            console.log('problemes amb l\'AJAX');
        }
    }


}

function mostrarInici() {
    cridaAjaxLobby('/Lobby');
}
*/
