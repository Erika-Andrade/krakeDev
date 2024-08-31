let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALES",sueldo:900.0},
    {cedula:"1005342428",nombre:"ANA",apellido:"SUAREZ",sueldo:450.0}
]
let esNuevo=false;
let roles=[];
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
    deshabilitarComponente("btnGuardarRol");
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
    deshabilitarCampos();
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
            let empleado={},agregado,empleadoEncontrado;
            empleado.cedula=valorCedula;
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo;
            agregado=agregarEmpleado(empleado);
            if(agregado==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                esNuevo=false;
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+empleado.cedula);
                empleadoEncontrado=buscarEmpleado(empleado.cedula);
                empleadoEncontrado.nombre=valorNombre;
                empleadoEncontrado.sueldo=valorSueldo;
                empleadoEncontrado.apellido=valorApellido;
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleados();
            }
            deshabilitarCampos();
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
deshabilitarCampos=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    deshabilitarComponente("btnGuardar");
}
ejecutarBusqueda=function(){
    let buscado=recuperarTexto("txtBusquedaCedula"),empleadoEncontrado;
    empleadoEncontrado=buscarEmpleado(buscado);
    if(empleadoEncontrado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre",empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido",empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleadoEncontrado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
    }

}
limpiar=function(){
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false;
    deshabilitarCampos();
}
buscarPorRol=function(){
    let ciRolIngresado=recuperarTexto("txtBusquedaCedulaRol"),encontrado;
    encontrado=buscarEmpleado(ciRolIngresado);
    if(encontrado!=null){
        mostrarTexto("infoCedula",encontrado.cedula);
        mostrarTexto("infoSueldo",encontrado.sueldo);
        mostrarTexto("infoNombre",encontrado.nombre+" "+encontrado.apellido);
    }else{
        alert("EMPLEADO NO EXISTE")
    }  
}
calcularAporteEmpleado=function(sueldo){
    let aporte;
    aporte=sueldo*0.0945;
    return aporte;
}
calcularValorAPagar=function(sueldo,aporte,descuento){
    let valorAPagar;
    valorAPagar=sueldo-aporte-descuento;
    return valorAPagar;
}
calcularRol=function(){
    let sueldo=recuperarFloatDiv("infoSueldo");
    let descuentos=recuperarFloat("txtDescuentos");
    let aporte,valorAPagar;
    if(isNaN(descuentos)){
        mostrarTexto("lblErrorDescuentos","Debe ingresar un numero");
        
    }else{
        if(descuentos<0 || descuentos>sueldo){
            mostrarTexto("lblErrorDescuentos","El valor debe estar entre 0 y "+sueldo)
        }else{
            aporte=calcularAporteEmpleado(sueldo);
            mostrarTexto("infoIESS",aporte);
            valorAPagar=calcularValorAPagar(sueldo,aporte,descuentos);
            mostrarTexto("infoPago",valorAPagar);
            habilitarComponente("btnGuardarRol");
        }
    }
}
buscarRol=function(cedula){
    let elementoRol,rolEncontrado=null;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        if(elementoRol.cedula==cedula){
            rolEncontrado=elementoRol;
            break;
        }
    }
    return rolEncontrado;
}
agregarRol=function(rol){
    let existeRol;
    existeRol=buscarRol(rol.cedula);
    if(existeRol==null){
        roles.push(rol);
        alert("ROL AGREADO EXITOSAMENTE")
        deshabilitarComponente("btnGuardarRol")
    }else{
        alert("YA EXISTE ROL CON LA CEDULA "+rol.cedula)
        
    }
}
calcularAporteEmpleador=function(sueldo){
    let aporte;
    aporte=sueldo*0.1115;
    return aporte;
}
guardarRol=function(){
    let pago=recuperarFloatDiv("infoPago");
    let aporte=recuperarFloatDiv("infoIESS");
    let nombre=recuperarTextoDiv("infoNombre");
    let cedula=recuperarTextoDiv("infoCedula");
    let sueldo=recuperarFloatDiv("infoSueldo");

    let aporteEmpleador=calcularAporteEmpleador(sueldo);
    

    let rol={};
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.valorAPagar=pago;
    rol.aporteEmpleado=aporte;
    rol.aporteEmpleador=aporteEmpleador;
    agregarRol(rol);


}