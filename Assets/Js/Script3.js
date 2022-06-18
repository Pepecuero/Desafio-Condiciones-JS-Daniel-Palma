let boton = document.getElementById('boton');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerVerificacion);

function hacerVerificacion(){
    let s1=document.getElementById('s1').value;
    let s2=document.getElementById('s2').value;
    let s3=document.getElementById('s3').value;
    let resultado=s1+s2+s3;

    if (resultado == 911 ) {
        respuesta.innerHTML=`Password 1 correcto`; 
    } 
    
    else if (resultado == 714) {
        respuesta.innerHTML=`Password 2 correcto`; 
    } else {
        respuesta.innerHTML=`Password incorrecto`;
    }



    }