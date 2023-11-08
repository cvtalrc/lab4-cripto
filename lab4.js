(function() {
    'use strict';

    // Obtener el texto de la página
    var texto = document.body.innerText;

    // Buscar la clave (todas las letras mayúsculas)
    var key = texto.match(/[A-Z]/g).join('');
    if (key) {
        console.log('La llave es: ' + key);
    } else {
        console.log('No se encontró la clave');
        return;
    }

    //Buscar y contar la cantidad de mensajes cifrados
    var mensajesC = document.querySelectorAll('div[class^="M"]');
    if (mensajesC.length > 0) {
        console.log('La cantidad de mensajes cifrados es: ' + mensajesC.length);

        let llave = CryptoJS.enc.Utf8.parse(key);

        let desencriptar = CryptoJS.TripleDES.decrypt(mensajesC[0].id,llave , { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8);
        console.log(mensajesC[0].id+" "+desencriptar);


         for(let i = 0 ; i < mensajesC.length; i++){
            let desencriptar = CryptoJS.TripleDES.decrypt(mensajesC[i].id,llave , { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8);
            console.log(mensajesC[i].id+" "+desencriptar);
            let resultadoElemento = document.createElement('p');
            resultadoElemento.textContent = desencriptar;
            document.body.appendChild(resultadoElemento);
         }

    } else {
        console.log('No se encontraron mensajes cifrados');
    }

})();