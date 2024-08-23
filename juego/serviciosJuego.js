obtenerAleatorio=function(){
    let aleatorio=(Math.random()*3);
    aleatorio=parseInt(aleatorio);
    aleatorio+=1;
    return aleatorio;
}
generarElemento=function(){
    let numAleatorio,elemento;
    numAleatorio=obtenerAleatorio();
    if(numAleatorio==1){
        elemento="piedra";
    }else if(numAleatorio==2){
        elemento="papel";
    }else if(numAleatorio==3){
        elemento="tijera"
    }
    return elemento;
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }else if((eleccionJugador1=="piedra"&eleccionJugador2=="tijera")||(eleccionJugador1=="papel"&eleccionJugador2=="piedra")||
    (eleccionJugador1=="tijera"&eleccionJugador2=="papel")){
        return 1;
    }else if((eleccionJugador2=="piedra"&eleccionJugador1=="tijera")||(eleccionJugador2=="papel"&eleccionJugador1=="piedra")||
    (eleccionJugador2=="tijera"&eleccionJugador1=="papel")){
        return 2;
    }
}
generarRuta=function(nombre){
    let ruta;
    ruta="./imagenes/"+nombre+".png";
    return ruta;
}
