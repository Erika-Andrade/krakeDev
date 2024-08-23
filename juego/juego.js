let puntosUsuario=0;
let puntosComputador=0;
jugar=function(seleccionado){
    let elemento,ruta,ganador;
    elemento=generarElemento();
    ruta=generarRuta(elemento);
    mostrarImagen("imgSelecCompu",ruta);
    ganador=determinarGanador(elemento,seleccionado);
    if(ganador==0){
        mostrarTexto("lblGanador","EMPATE");
    }else if(ganador==1){
        mostrarTexto("lblGanador","PERDISTE LA PARTIDA!!");
        puntosComputador+=1;
        mostrarTexto("lblPuntosComp","Computadora: "+puntosComputador);
    }else if(ganador==2){
        mostrarTexto("lblGanador","GANASTE LA PARTIDA!!");
        puntosUsuario+=1;
        mostrarTexto("lblPuntosUsuario","Usuario: "+puntosUsuario);
    }
    if(puntosUsuario==5){
        mostrarTexto("lblWinPuntos","HAS GANADO EL JUEGO");
    }else if(puntosComputador==5){
        mostrarTexto("lblWinPuntos","EL COMPUTADOR TE HA VENCIDO");
    }
}
limpiar=function(){
    mostrarTexto("lblPuntosComp","Computadora: 0");
    mostrarTexto("lblPuntosUsuario","Usuario: 0");
    mostrarImagen("imgSelecCompu","");
    mostrarTexto("lblGanador","");
    mostrarTexto("lblWinPuntos","");
}