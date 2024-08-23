validarPlaca=function(){
    let placa,erroresEstructura,provincia;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=validarEstructura(placa);
    if(erroresEstructura===null){
        mostrarTexto("lblValidez","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(placa);
        if(provincia!=null){
            mostrarTexto("lblProvincia",provincia)
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA")
        }
    }else{
        mostrarTexto("lblValidez","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}
