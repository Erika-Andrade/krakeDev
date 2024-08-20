calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento;
    valorDescuento=monto*porcentajeDescuento/100;
    return valorDescuento;

}
calcularIVA=function(monto){
    let valorIVA;
    valorIVA=monto*12/100;
    return valorIVA=valorIVA.toFixed(2);
}
calcularSubtotal=function(precio,cantidad){
    let valorSubtotal=precio*cantidad;
    return valorSubtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let valorTotal=subtotal-descuento+(parseFloat(iva));
    return valorTotal.toFixed(2);
}
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let valorDescuento;
    if(cantidad<3){
        valorDescuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        valorDescuento=subtotal*0.03;
    }else if(cantidad>=6 && cantidad<=11){
        valorDescuento=subtotal*0.04;
    }else if(cantidad>=12){
        valorDescuento=subtotal*0.05;
    }
    return valorDescuento;
}