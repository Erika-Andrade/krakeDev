let notas=[]
agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
agregarNota=function(nota){
    notas.push(nota);
}
probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}
calcularPromedio=function(){
    let sumaNotas=0,promedio;
    for(let i=0;i<notas.length;i++){
        sumaNotas+=notas[i];
    }
    promedio=sumaNotas/notas.length;
    return promedio;
}
ejecutarPromedio=function(){
    let promedio;
    promedio=calcularPromedio();
    mostrarTexto("lblPromedio",promedio)
}