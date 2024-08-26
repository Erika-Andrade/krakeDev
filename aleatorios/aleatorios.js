crearNumeroAlea=function(){
    let aleatorio,aleatorioMultiplicado,aleatorioEntero,numAlea;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*100;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    numAlea=aleatorioEntero+1;
    return numAlea;
}
generarAleatorios=function(){//<>
    let aleatorios=[],num,numAlea;
    num=recuperarTexto("txtNum");
    if(num>=5 & num<=20){
        for(let i=0;i<num;i++){
            console.log(i);
            numAlea=crearNumeroAlea();
            aleatorios.push(numAlea);
        }
        mostrarResultados(aleatorios);
    }
}
mostrarResultados=function(arregloNumeros){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUMEROS ALEATORIOS</th></tr>";
    let numAlea;
    for(let i=0;i<arregloNumeros.length;i++){
        numAlea=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=numAlea;
        contenidoTabla+="</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla
}