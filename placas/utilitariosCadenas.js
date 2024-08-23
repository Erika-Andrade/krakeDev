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
esGuion=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter==45){
        return true;
    }else{
        return false;
    } 
}
