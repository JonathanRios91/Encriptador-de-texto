const textarea = document.querySelector(".encriptador");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function BotonEncriptar(){
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
}

function encriptar(stringEncriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    console.table(matrizcodigo);
    stringEncriptada=stringEncriptada.tolowercase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceall(matrizcodigo[i][0],matrizcodigo[i][1]);
        }

    }
    return stringEncriptada;
}