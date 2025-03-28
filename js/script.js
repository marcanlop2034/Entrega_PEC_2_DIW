'use strict';
const pathPdf = './PEC 2.pdf'

function muestraPdf(){
    //alert('muestrapdf');
    let elePadre = document.getElementById('footer');
    let eleFrame = document.createElement('iframe');
    eleFrame.setAttribute('src',pathPdf);
    eleFrame.style.width='100%';
    eleFrame.style.height='960px';
    elePadre.appendChild(eleFrame);
    let btnShowPdf = document.getElementById('btnFooter');
    btnShowPdf.innerHTML='Cerrar PDF';
}

function ocultaPdf(){
    let elePadre = document.getElementById('footer');
    elePadre.setAttribute('visible','true');
    let btnShowPdf = document.getElementById('btnFooter');
    btnShowPdf.innerHTML='Ver PDF';
}

function inicio(){
    let btnShowPdf = document.getElementById('btnFooter');
    if(btnShowPdf.innerHTML='Cerrar PDF'){
        btnShowPdf.addEventListener('click', ocultaPdf, false);
    }else{
        btnShowPdf.addEventListener('click', muestraPdf, false);
    }
   
}

document.addEventListener('DOMContentLoaded', inicio, false);