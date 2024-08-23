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
    }else if(ganador==2){
        mostrarTexto("lblGanador","GANASTE LA PARTIDA!!");
    }
}