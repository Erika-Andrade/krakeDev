calcularPromedioNotas=function(){
    let n1,n2,n3,promedio;
    n1=recuperarFloat("txtN1");
    n2=recuperarFloat("txtN2");
    n3=recuperarFloat("txtN3");
    promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    mostrarTexto("lblPromedio","Promedio: "+promedio);
}