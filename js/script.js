/*---------------- Seleccionde del Elemento ----------------*/
const btnencriptar = document.querySelector(".btn-encriptar");
const txtencriptar = document.querySelector(".encriptador");
const aviso = document.querySelector(".texto-aviso");
const resultado = document.querySelector(".evalua");
const contenido = document.querySelector(".area-de-encriptado");
const btncopiar = document.querySelector(".Btn-copiar");
const btndesencriptar = document.querySelector(".btn-desencriptar");
/*const btnreiniciar = document.querySelector("btn-reiniciar");*/

/*---- Las "llaves" de encriptación son las siguientes: ----*/
/*"llaves" de encriptación:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


/*-------------------- Boton Encriptar --------------------*/
btnencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtencriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#FFA27F";
        aviso.style.color = "#FF0000";
        aviso.style.fontweight = "800";
        aviso.textContent = "El cuadro de texto no debe estar vacio.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#FFA27F";
        aviso.style.color = "#FF0000";
        aviso.style.fontweight = "800";
        aviso.textContent = "El Texto no debe contener acentos y/o caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#FFA27F";
        aviso.style.color = "#FF0000";
        aviso.style.fontweight = "800";
        aviso.textContent = "El Texto no debe contener acentos y/o caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resultado.innerHTML = texto;
        contenido.remove();
        btncopiar.style.visibility = "inherit"
    }
  
});


/*------------------- Boton Desencriptar -------------------*/
btndesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtencriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#FFA27F";
        aviso.style.color = "#FF0000";
        aviso.style.fontweight = "800";
        aviso.textContent = "El cuadro de texto no debe estar vacio.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#FFA27F";
        aviso.style.color = "#FF0000";
        aviso.style.fontweight = "800";
        aviso.textContent = "El Texto no debe contener acentos y/o caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#FFA27F";
        aviso.style.color = "#FF0000";
        aviso.style.fontweight = "800";
        aviso.textContent = "El Texto no debe contener acentos y/o caracteres especiales.";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resultado.innerHTML = texto;
        contenido.remove();
        btncopiar.style.visibility = "inherit"
    }
  
});


/*---------------------- Boton Copiar ----------------------*/
btncopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy");   
})


/*---------------------- Boton Reiniciar ----------------------*/
/*btnreiniciar..addEventListener("click", e=>{
    e.preventDefault();*/
