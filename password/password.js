ejecutarValidacion=function(){
    let mensaje,error;
    mensaje=recuperarTexto("txtPassword");
    validacion=validadPassword(mensaje);
    if(validacion==""){
        mostrarTexto("lblValido","Password Correcto");
    }else{
        mostrarTexto("lblErrores",validacion)
    }
}
validadPassword=function(password){//<>
    let contraLong=password.length;
    let cadenaErrores="",caracter;
    let contadorMayusculas=0,contadorDigito=0,contadorSpecial=0;
    if(contraLong>=8 & contraLong<=16){
        for(let posicion=0;posicion<contraLong;posicion++){
            caracter=password.charAt(posicion);
            if(esMayuscula(caracter)){
                contadorMayusculas++;
            }
            if(esDigito(caracter)){
                contadorDigito++;
            }
            if(esCaracterEspecial(caracter)){
                contadorSpecial++;
            }
        }
        if(contadorMayusculas>=1){  
        }else{
            cadenaErrores+=" La contrasenia debe tener al menos una mayuscula. \n";  
        }
        if(contadorDigito>=1){
            
        }else{
            cadenaErrores+=" La contrasenia debe tener al menos un digito. \n";  
        }
        if(contadorSpecial>=1){
            
        }else{
            cadenaErrores+=" La contrasenia debe tener al menos un caracter especial  como asterico (*),guion medio(-) o guion bajo (_). \n";  
        }
    }else{
        cadenaErrores+="La contrasenia debe tener minimo 8 caracteres y maximo 16 caracteres. "
    }
    
    return cadenaErrores;
}
esMayuscula=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter>=65 && ascCaracter<=90){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter>=48 && ascCaracter<=57){
        return true;
    }else{
        return false;
    }  
}
esCaracterEspecial=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter==42 || ascCaracter==45||ascCaracter==95){
        return true;
    }else{
        return false;
    }  
}
