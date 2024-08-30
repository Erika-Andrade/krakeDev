let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALES",sueldo:900.0},
    {cedula:"1005342428",nombre:"ANA",apellido:"SUAREZ",sueldo:450.0}
]
let esNuevo=false;
mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th></tr>";
    let elementoEmpleado;
    for(let i=0;i <empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
        +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    deshabilitarComponente("btnGuardar");
}
ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

    habilitarComponente("btnGuardar");
    esNuevo=true;
}
buscarEmpleado=function(cedula){
    let elementoEmpleado,empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        if(elementoEmpleado.cedula==cedula){
            empleadoEncontrado=elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}
agregarEmpleado=function(empleado){
    let existeEmpleado;
    existeEmpleado=buscarEmpleado(empleado.cedula);
    if(existeEmpleado==null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }
}
guardar=function(){
    let valorCedula=recuperarTexto("txtCedula"),valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido"),valorSueldo=recuperarFloat("txtSueldo");
    if(esNombreValido(valorNombre,"lblErrorNombre")& esNombreValido(valorApellido,"lblErrorApellido")&
    esCedulaValida(valorCedula)&esSueldoValido(valorSueldo)){
        if(esNuevo==true){
            let empleado={},agregado;
            empleado.cedula=valorCedula;
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo;
            agregado=agregarEmpleado(empleado);
            if(agregado==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+empleado.cedula);
            }
        }

    }

}
esNombreValido=function(name,idComponenteError){
    let valido=true,longName=name.length; 
    if(name==""){
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO*");
        valido=false;
    }else{
        if (longName < 3) {
            valido = false; 
            mostrarTexto(idComponenteError, "El campo debe tener al menos 3 caracteres");
         }else if (!esMayuscula(name)) {
            valido = false; 
            mostrarTexto(idComponenteError, "El campo debe contener solo mayúsculas");
         }
    }
    return valido;
}
esCedulaValida=function(cedula){
    let valido=true,longCedula=cedula.length; 
    if(cedula==""){
        mostrarTexto("lblErrorCedula","CAMPO OBLIGATORIO*");
        valido=false;
    }else{
       if(longCedula!=10){
        valido=false;
        mostrarTexto("lblErrorCedula","Debe tener 10 caracteres.");
       }else if(!esDigito(cedula)){
        valido=false;
        mostrarTexto("lblErrorCedula","Todos los caracteres deben ser digitos.");
       }
    }
    return valido;
}
esSueldoValido=function(sueldo){
    let valido=true; 
    if(isNaN(sueldo)){
        mostrarTexto("lblErrorSueldo","CAMPO OBLIGATORIO*");
        valido=false;
    }else{
       if(sueldo<400 || sueldo>5000){
        mostrarTexto("lblErrorSueldo","Este campo debe estar entre 400 y 5000.");
        valido=false;
       } 
    }
    return valido;

}