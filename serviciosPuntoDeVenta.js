calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento;
    valorDescuento=monto*porcentajeDescuento/100;
    return valorDescuento;

}
calcularIVA=function(monto){
    let valorIVA;
    valorIVA=monto*12/100;
    return valorIVA;
}
calcularSubtotal=function(precio,cantidad){
    let valorSubtotal=precio*cantidad;
    return valorSubtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let valorTotal=subtotal-descuento+iva;
    return valorTotal;
}
