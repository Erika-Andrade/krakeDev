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