let puntos=0; 
let lanzamiento=5;
jugar=function(){
    let resultado;
    cambiarTexto("lblMensaje","")
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}
modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //si el jugador obtiene más de 20 
    if(puntos>20){
        //mostrar un mensaje GANASTE
        cambiarTexto("lblMensaje","GANASTE!!");
        //llamar a limpia
        limpiar();
        

    }   
}
limpiar=function(){
    //coloca puntos en 0 y lanzamiento en 5
    lanzamiento=5;
    puntos=0;
     //en variables y en pantalla
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamiento);
    //quitar la imagen
    cambiarImagen("imgDado","")


}

modificarLanzamientos=function(){//no recibe paramtros
    //resta uno a lanzamientos
    lanzamiento=lanzamiento-1;
    //muestra en pantalla
    cambiarTexto("lblLanzamientos",lanzamiento)
     //si lanzamientos llega a 0
    if(lanzamiento==0){
        //mostrar en pantalla GAME OVER
        cambiarTexto("lblMensaje","GAME OVER");
        //invoca a limpiar
        limpiar();
        return;
        
    }
}
//funcion mostrarCara recibe el numero que quiere mostrar
//muestra la imagen correspondiente que recibe
//no retorna
mostrarCara=function(numero){
    if(numero==1){
       cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
         cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");  
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");    
    }
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}