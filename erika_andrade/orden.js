personas=[{nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5}]
agregarPersona=function(){
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");
    let valido=0;
    if(nombre.length<3){
        mostrarTexto("lblNombreError","Debe tener al menos 3 caracteres");
    }else{
        valido+=1;
    }
    if(isNaN(edad)){
        mostrarTexto("lblEdadError","Ingrese un numero entero.");
    }else{
        if(edad<0 || edad >100){
            mostrarTexto("lblEdadError","El numero debe ser entre 0 y 100.");
        }else{
            valido+=1;
        }
    }
    if(valido==2){
        nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad,
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE")
    }

}