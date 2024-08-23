validarEstructura=function(placa){
    let longPlaca=placa.length;
    let errores="";
    let valido=0;
    if(longPlaca==7||longPlaca==8){
        if(esMayuscula(placa.charAt(0))){
            valido+=1;
        }else{
            errores+=" El primer caracter deber ser mayuscula. \n";
        }
        if(esMayuscula(placa.charAt(1))){
            valido+=1;
        }else{
            errores+=" El segundo caracter deber ser mayuscula.\n";
        }
        if(esMayuscula(placa.charAt(2))){
            valido+=1;
        }else{
            errores+=" El tercer caracter deber ser mayuscula.\n";
        }
        if(esGuion(placa.charAt(3))){
            valido+=1;
        }else{
            errores+=" El cuarto caracter deber ser un guion.\n";
        }
        if(esDigito(placa.charAt(4))){
            valido+=1;
        }else{
            errores+=" El quinto caracter deber ser un digito.\n";
        }
        if(esDigito(placa.charAt(5))){
            valido+=1;
        }else{
            errores+=" El sexto caracter deber ser un digito.\n";
        }
        if(esDigito(placa.charAt(6))){
            valido+=1;
        }else{
            errores+=" El septimo caracter deber ser un digito.\n";
        }
        if(longPlaca==8){
            if(esDigito(placa.charAt(7))){
                valido+=1;
            }else{
                errores+=" El octavo caracter deber ser un digito.\n";
            }
        }
        
    }else{
        errores="La placa debe tener  7 u 8 caracteres.";
    }
   if(valido==7  || valido==8){
    return null;
   }else{
    return errores;
   }


}
obtenerProvincia=function(placa){
    let primeraLetra=placa.charAt(0);
    let provincia;
    if(primeraLetra=="A"){
        provincia="AZUAY";
    }else if(primeraLetra=="B"){
        provincia="BOLIVAR";
    }else if(primeraLetra=="U"){
        provincia="CAÑAR";
    }else if(primeraLetra=="C"){
        provincia="CARCHI";
    }else if(primeraLetra=="X"){
        provincia="COTOPAXI";
    }else if(primeraLetra=="H"){
        provincia="CHIMBORAZO";
    }else if(primeraLetra=="O"){
        provincia="EL ORO";
    }else if(primeraLetra=="E"){
        provincia="ESMERALDAS";
    }else if(primeraLetra=="W"){
        provincia="GALAPAGOS";
    }else if(primeraLetra=="G"){
        provincia="GUAYAS";
    }else if(primeraLetra=="I"){
        provincia="IMBABURA";
    }else if(primeraLetra=="L"){
        provincia="LOJA";
    }else if(primeraLetra=="R"){
        provincia="LOS RIOS";
    }else if(primeraLetra=="M"){
        provincia="MANABI";
    }else if(primeraLetra=="V"){
        provincia="MORONA SANTIAGO";
    }else if(primeraLetra=="N"){
        provincia="NAPO";
    }else if(primeraLetra=="S"){
        provincia="PASTAZA";
    }else if(primeraLetra=="P"){
        provincia="PICHINCHA";
    }else if(primeraLetra=="K"){
        provincia="SUCUMBIOS";
    }else if(primeraLetra=="Q"){
        provincia="ORELLANA";
    }else if(primeraLetra=="T"){
        provincia="TUNGURAHUA";
    }else if(primeraLetra=="Z"){
        provincia="ZAMORA CHINCHIPE";
    }else if(primeraLetra=="Y"){
        provincia="SANTA ELENA";
    }else{
        provincia=null;
    }
    return provincia;
}
obtenerTipoVehiculo=function(placa){
    let segundoLetra=placa.charAt(1);
    let tipoVehi;
    if(segundoLetra=="A"||segundoLetra=="Z"){
        tipoVehi="VEHICULO COMERCIAL";
    }else if(segundoLetra=="E"){
        tipoVehi="VEHICULO GUBERNAMENTAL";
    }else if(segundoLetra=="X"){
        tipoVehi="VEHICULO DE USO OFICIAL";
    }else if(segundoLetra=="S"){
        tipoVehi="VEHICULO DE GOBIERNO PROVINCIAL";
    }else if(segundoLetra=="M"){
        tipoVehi="VEHICULO MUNICIPAL";
    }else if(segundoLetra=="I"||segundoLetra=="O"){
        tipoVehi=null;
    }else{
        tipoVehi="VEHICULO PARTICULAR";
    }
    return tipoVehi;
}
obtenerDiaPicoYPlaca=function(placa){
    let ultposicion=(placa.length)-1;
    let ultimoCaracter=placa.charAt(ultposicion);
    let dia;
    if(ultimoCaracter==1 || ultimoCaracter==2){
        dia="LUNES";
    }else if(ultimoCaracter==3 || ultimoCaracter==4){
        dia="MARTES";
    }else if(ultimoCaracter==5 || ultimoCaracter==6){
        dia="MIERCOLES";
    }else if(ultimoCaracter==7 || ultimoCaracter==8){
        dia="JUEVES";
    }else if(ultimoCaracter==9 || ultimoCaracter==0){
        dia="VIERNES";
    }
    return dia;
}

