"use strict";

//defino el nro de imagen como  variable global para poder utilizarla en todas las funciones

let NroImagen = obtenerNroRandom();//elige el numero de imagen a mostrar

let txtcaptcha = document.querySelector("#txtcptch");// asigna variable al input del captcha

selectorDeImagenes();//sellecion imagen con el nro generado al azar

let btncaptcha =  document.querySelector("#btnCaptcha");//  asigna variable al btn verificador del captcha
let comparacion ;

lectorTxtCaptcha();

btncaptcha.addEventListener('click',comparacionCaptcha);// escucha el click del boton verificador de captcha

function lectorTxtCaptcha(){
    
fetch('js/captcha.txt')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    const linea = lines[NroImagen-1];
    comparacion = linea;

    console.log(comparacion);
    return linea;
  });
}

function comparacionCaptcha(){        
    
    let txtcaptcha = document.querySelector("#txtcptch");
    const valorTxtCaptcha = txtcaptcha.value ;    
    console.log(valorTxtCaptcha)    
        if(comparacion === valorTxtCaptcha){
            console.log("acceso correcto");
        }
        else{
            console.log(valorTxtCaptcha)
            console.log("error");
    }          
    
}

function selectorDeImagenes(){
    let imgCaptcha = document.querySelector("#img_captcha");

    imgCaptcha.src="images/capthchasImages/captcha"+NroImagen+".png";

    return imgCaptcha;
    }
//funcion que retorna un valor random entre 1 y 10 
function obtenerNroRandom(){
    let nrorandom= 1;
    nrorandom = Math.floor(Math.random()*10)+1;    
    return  nrorandom;
    }