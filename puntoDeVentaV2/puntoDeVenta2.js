calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;
    let resumen;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento=0;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
    //porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
    if( esCantidadValida(cantidad,"lblCantidadError")& esProductoValido(nombreProducto,"lblProductoError")
        & esPrecioValido(precioProducto,"lblPrecioError")){
        console.log("campo obligatorio")
        valorSubtotal=calcularSubtotal(precioProducto,cantidad);
        mostrarTexto("lblSubtotal",valorSubtotal);
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
        mostrarTexto("lblDescuento",valorDescuento);
        valorIVA=calcularIVA(valorSubtotal-valorDescuento);
        mostrarTexto("lblValorIVA",valorIVA);
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        mostrarTexto("lblTotal",valorTotal);     
        resumen="Valor a pagar por "+cantidad+" "+nombreProducto+"  con "+valorDescuento+"% de descuento: USD "+valorTotal;
        mostrarTexto("lblResumen",resumen);
    }else{
        console.log("idsjm")
    }

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    
        
    
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTextoEnCaja("txtPrecio","");
    //mostrarTextoEnCaja("txtPorcentajeDescuento","");
    mostrarTexto("lblSubtotal","0.0"); 
    mostrarTexto("lblDescuento","0.0"); 
    mostrarTexto("lblValorIVA","0.0"); 
    mostrarTexto("lblTotal","0.0"); 
    mostrarTexto("lblResumen",""); 
    mostrarTexto("lblProductoError","")
    mostrarTexto("lblCantidadError","")
    mostrarTexto("lblPrecioError","")
}
/* SI TODO FUNCIONA, HACER UN PUSH */
esProductoValido=function(producto,idComponenteError){
    let productoLen=producto.length;
    let hayErrores=false;
    if(producto==""){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO*")
        hayErrores=true;
    }else{
        if(productoLen>10){
            mostrarTexto(idComponenteError,"NO PUEDE TENER MAS DE 10 CARACTERES");
            hayErrores=true;
    }
    }
    if(hayErrores==false){
        mostrarTexto(idComponenteError,"")
    }//<h3 id="lblResumen"></h3>
    return !hayErrores;
}
esCantidadValida=function(cantidad,idComponenteError){
    let hayErrores=false;
    if(isNaN(cantidad)){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO*")
        hayErrores=true;
    }else{
        if(cantidad<1 || cantidad>100){
            mostrarTexto(idComponenteError,"LA CANTIDAD VALIDA ES ENTRE 1 Y 100");
            hayErrores=true;
    }
    
    }
    if(hayErrores==false){
        mostrarTexto(idComponenteError,"")
    }
    return !hayErrores;   
}
esPrecioValido=function(precio,idComponenteError){
    let hayErrores=false;
    if(isNaN(precio)){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO*")
        hayErrores=true;
    }else{
        if(precio<0 || precio>50){
        mostrarTexto(idComponenteError,"EL PRECIO DEBE SER ENTRE 0 Y  50");
        hayErrores=true;
    }}
    
    if(hayErrores==false){
        mostrarTexto(idComponenteError,"")
    }
    return !hayErrores;}
