//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta,intentos=0,coincidencias=0,errores=0;
esMayuscula=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter>=65 && ascCaracter<=90){
        return true;
    }else{
        return false;
    }
}//<>
guardarPalabra=function(){
    let mensaje,caracter,contMayus=0;
    mensaje=recuperarTexto("txtSecreta");
    for(let i=0;i<5;i++){
        caracter=mensaje.charAt(i);
        if(esMayuscula(caracter)){
            contMayus++;
        }
    }
    if((mensaje.length)==5 & contMayus==5){
        palabraSecreta=mensaje;
        console.log(mensaje);
    }else{
        alert("Debe ingresar una palabra de 5 letras mayusculas.");

    }
}
mostrarLetra=function(letra,posicion){
    if(posicion==0){
        mostrarTexto("div0",letra);
    }else if(posicion==1){
        mostrarTexto("div1",letra);
    }else if(posicion==2){
        mostrarTexto("div2",letra);
    }else if(posicion==3){
        mostrarTexto("div3",letra);
    }else if(posicion==4){
        mostrarTexto("div4",letra);
    }

}
validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<5;i++){
        if(palabraSecreta.charAt(i)==letra){
            mostrarLetra(letra,i);
            letrasEncontradas+=1;
            coincidencias+=1;
        }
    }
    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA.")
        errores+=1
    }

}
ingresarLetra=function(){
    let letra;
    intentos+=1;
    letra=recuperarTexto("txtLetra");
        if(esMayuscula(letra)){
            validar(letra);
            if(coincidencias==5){
                alert("HA GANADO");
            }
            if(intentos==10){
                alert("HA PERDIDO");
            }
                
        }else{
            alert("SOLO SE ACEPTAN MAYUSCULAS");
        }

}

