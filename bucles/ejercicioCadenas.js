ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}



recorrerCadena=function(cadena){//<>
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion)
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion)
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
}
ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}
invertirCadena=function(cadena){
    let resultado="";
    for(let posicion=cadena.length;posicion>=0,posicion--;){
        resultado+=cadena.charAt(posicion);
    }
    mostrarTexto("lblInvertido",resultado);

}
buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        letraIterada=cadena.charAt(i);
        if(letraIterada==letra)
            existeLetra=true;
    }
    if(existeLetra==true){
        console.log("exisste");
        return true;

    }else{
        console.log("no existe");
        return false;
    }
}
contarMayusculas=function(){
    let letra,contadorMayusculas=0;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas);
}