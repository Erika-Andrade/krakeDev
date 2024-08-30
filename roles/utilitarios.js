
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}
esMayuscula=function(palabra){
    let ascCaracter,contadorMayus=0;

    for(let i=0;i<palabra.length;i++){
        ascCaracter=palabra.charCodeAt(i);
        if(ascCaracter>=65 && ascCaracter<=90){
            contadorMayus+=1
        }
    }
        
    if(contadorMayus==palabra.length){
        return true;
    }else{
        return false;
    }
}
esDigito=function(cadena){
    let ascCaracter,contadorDigito=0;

    for(let i=0;i<cadena.length;i++){
        ascCaracter=cadena.charCodeAt(i);
        if(ascCaracter>=48 && ascCaracter<=57){
            contadorDigito+=1
        }
    }
        
    if(contadorDigito==cadena.length){
        return true;
    }else{
        return false;
    }
    
    
}
