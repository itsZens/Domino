window.onload = function () {
    //cridaAJAXinicial('/json');
    var Username = localStorage.getItem('Username');
    document.getElementById('dropdownUser').innerText = Username;





};
/*
function cridaAJAXinicial(url) {

    xhr = new XMLHttpRequest();

    if (!xhr) {
        alert('problemes amb XHR');
        return false;

    }
    xhr.onreadystatechange = callbackAJAXinicial;
    xhr.open('POST', url, true); // el 3r paràmetre indica que és asíncron
    xhr.send();

}
//Callback AJAX que només s'executa al entrar a la pàgina
function callbackAJAXinicial() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            //dades = xhr.response;
            dada = JSON.parse(xhr.response);
            let id = dada.id -1;
            alert(id+" "+dada.Username);

            //mostrarInici();
        } else {
            console.log('problemes amb l\'AJAX');
        }
    }


}
*/
