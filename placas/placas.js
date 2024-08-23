validarPlaca=function(){
    let placa,erroresEstructura;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);
    if(erroresEstructura===null){
        mostrarTexto("lblValidez","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblValidez","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}