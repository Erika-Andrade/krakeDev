probarAtributos=function(){
    let persona={
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo:true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo===false){
        console.log("no esta vido");
    }else{
        console.log("esta vivo")
    }
}
crearProducto=function(){
    let producto1={
        nombre:"Ruffles",
        precio:1.75,
        stock:160
    };
    let producto2={
        nombre:"Nestea",
        precio:0.83,
        stock:32,
    };
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto2.stock>producto1.stock){
        console.log("Producto 2 tiene mayor stock");
    }else if(producto1.stock==producto2.stock){
        console.log("Ambos productos tienen el mismo stock")
    }
}