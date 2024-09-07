let frutas=["pera","manzana","banana"];
probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("lblFruta"),resultado;
    resultado=buscar(frutaIngresada);
    if(resultado==null){
        alert("No existe la fruta")
    }else{
        alert(frutaIngresada+" existe en el cesto")
    }
}

buscar=function(fruta){
    let elemento,frutaEncontrada;
    for(let i=0;i<frutas.length;i++){
        elemento=frutas[i];
        if(elemento==fruta){
            frutaEncontrada=fruta;
            break;
        }
    }
    return frutaEncontrada;
}