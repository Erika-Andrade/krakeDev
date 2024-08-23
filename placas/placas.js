validarPlaca=function(){
    let placa,erroresEstructura,provincia,tipoVehi;
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
        tipoVehi=obtenerTipoVehiculo(placa);
        if(tipoVehi!=null){
            mostrarTexto("lblTipo",tipoVehi);
        }else{
            mostrarTexto("lblTipo","TIPO DE VEHICULO INCORRECTO")
        }

    }else{
        mostrarTexto("lblValidez","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores",erroresEstructura);
    }
}
