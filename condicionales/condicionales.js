calcularTasaInteres=function(ingresoAnual){
    let tasa;
    if(ingresoAnual<300000){//<>
        tasa=16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa=15; 
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa=14; 
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa=13; 
    }else if(ingresoAnual>=2000000) {
        tasa=12; 
    }
    return tasa;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let valorCuota; 
    if(edad>50){
        valorCuota=(ingresos-egresos)*30/100;
    }else if(edad<=50){
        valorCuota=(ingresos-egresos)*40/100;
    }
    return valorCuota; 
}
calcularDescuento=function(precio,cantidad){
    let valorPago;
    if(cantidad<3){
        valorPago=precio;
    }else if(cantidad>=3 && cantidad<=5){
        valorPago=precio-(precio*2/100);
    }else if(cantidad>=6 && cantidad<=11){
        valorPago=precio-(precio*3/100);
    }else if(cantidad>=12){
        valorPago=precio-(precio*4/100);
    }
    return valorPago;
}
determinarColesterolLDL=function(nivelColesterol){//<>
    let strLDL;
    if(nivelColesterol<100){
        strLDL="Optimo (lo mejor para su salud)";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        strLDL="Casi optimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        strLDL="Limite superior del rango normal";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        strLDL="Alto";
    }else if(nivelColesterol>=190){
        strLDL="Muy alto";
    }
    return strLDL;
}
validarClave=function(clave){
    let claveLen=clave.length;
    if(claveLen>=8 && claveLen<=16){
        return true;
    }else{
        return false;
    }
}
esMayuscula=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter>=65 && ascCaracter<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
    let ascCaracter=caracter.charCodeAt(0);
    if(ascCaracter>=97 && ascCaracter<=122 || 
        ascCaracter>=160 && ascCaracter<=164 || ascCaracter==130){
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
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaFisica>90 || notaGeometria>90 ||notaMatematica>90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if((notaFisica>90 ||notaMatematica>90)&& notaGeometria>80){
        return true;
    }else{
        return false;
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if((notaFisica>90 || notaGeometria>90 ||notaMatematica>90)&&notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}
