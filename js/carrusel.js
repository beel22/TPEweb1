
const carrusel = document.querySelector(".carrusel-fotos");
let intervalo = null;
let step = 1 ;
let maxScrolLeft = carrusel.scrollWidth - carrusel.clientWidth;
const start = () =>{
    intervalo =setInterval(function (){
        carrusel.scrollLeft= carrusel.scrollLeft + step;
        if  (carrusel.scrollLeft === maxScrolLeft){
            step = step * -1;

        }else if(carrusel.scrollLeft ===0){
            step = step* - 1 ;
        }

    },10);
    
};
const stop = () =>{};

start();