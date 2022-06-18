let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerSuma);

function hacerSuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=parseFloat(document.getElementById('n3').value);
    let resultado=n1+n2+n3;

    if (resultado <=10) {
        respuesta.innerHTML=`Llevas ${resultado} Stickers`; 
    }

    if (resultado >10) {
        respuesta.innerHTML=`Llevas demasiados Stickers`; 
    }


    }



