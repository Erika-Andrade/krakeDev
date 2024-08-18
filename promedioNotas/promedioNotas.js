calcularPromedioNotas=function(){
    let n1,n2,n3,promedio;
    n1=recuperarFloat("txtN1");//<>
    n2=recuperarFloat("txtN2");
    n3=recuperarFloat("txtN3");
    promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    mostrarTexto("lblPromedio","Promedio: "+promedio);
    if(promedio>0 && promedio<5){
        mostrarTexto("lblMensaje","REPROBADO");
        mostrarImagen("imagen","./imagenes/fracaso.gif");

    }else if(promedio>=5 && promedio<=8){
        mostrarTexto("lblMensaje","BUEN TRABAJO");
        mostrarImagen("imagen","./imagenes/buenTrabajo.gif");
    }else if(promedio>8 && promedio<=10){
        mostrarTexto("lblMensaje","EXCELENTE");
        mostrarImagen("imagen","./imagenes/exito.gif");
    }else{
        mostrarTexto("lblMensaje","DATOS INCORRECTOS");
        mostrarImagen("imagen","./imagenes/datosIncorrectos.gif");
    }
}