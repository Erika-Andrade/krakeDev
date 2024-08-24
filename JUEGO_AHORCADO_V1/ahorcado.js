//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
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
