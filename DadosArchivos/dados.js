jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblMensaje","Es mayor a 3. Ganaste!");

    }else{
        cambiarTexto("lblMensaje","Es menor a 3. OH,ESTAS DE MALAS!");
    }


}
lanzarDado=function(){
    let aleatorio,numeroMultiplicado, numeroEntero,velorDado;
    aleatorio=Math.random();//entre0 y 1
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado=numeroEntero+1;
    return valorDado;
}
