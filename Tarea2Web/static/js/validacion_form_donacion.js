fetch('region_comuna.json')
.then(response => response.json())
.then(data => {
// Crear opciones en el selector de regiones
const regionSelector = document.getElementById('region');
data.regiones.forEach(region => {
    const option = document.createElement('option');
    option.value = region.nombre;
    option.text = region.nombre;
    regionSelector.appendChild(option);
});


regionSelector.addEventListener('change', () => {
    const regionSeleccionada = regionSelector.value;
    const region = data.regiones.find(r => r.nombre === regionSeleccionada);
    const comunas = region.comunas;

    const comunaSelector = document.getElementById('comuna');
    comunaSelector.innerHTML = '';
    comunas.forEach(comuna => {
    const option = document.createElement('option');
    option.text = comuna.nombre;
    comunaSelector.appendChild(option);
});
});
});

const validateEmail = (email) => {
  if (!email) return false;
  // length validation
  let lengthValid = email.length > 15;

  // format validation
  let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z.]{2,3}$/;
  let formatValid = re.test(email);

  // return logic AND of validations.
  return lengthValid && formatValid;
};

const validatePhoneNumber = (phoneNumber) => {
  let re = /^[0-9]+$/;
  let formatValid = re.test(phoneNumber);
  if(phoneNumber.length == 8 && formatValid){
    return true;
  }
  else if(phoneNumber.length==0){
    return true;
  }
  else{
    return false;
  }
};

const validateFiles = (files) => {
  if (!files) return false;

  // number of files validation
  let lengthValid = 1 <= files.length && files.length <= 3;

  // file type validation
  let typeValid = true;

  for (const file of files) {
    // file.type should be "image/<foo>" or "application/pdf"
    let fileFamily = file.type.split("/")[0];
    typeValid &&= fileFamily == "image";
  }

  // return logic AND of validations.
  return lengthValid && typeValid;
};



const validateCantidad = (cantidad)=> {
  if(!cantidad) return false;
  else if(cantidad<0) return false;
  else return true;
};


const validateFecha = (fecha) => {
  const actual= new Date();
  const input= new Date(fecha);
  if (input<actual) {
    return false;
  }
  else if(!fecha){
    return false;
  }
  else{
    return true;
  }
}

const validateRegion = (region) => {
  if(!region){
    return false;
  }
  else{
    return true;
  }
}

const validatePedido=(tipo)=>{
  if(tipo!= "--"){
    return true;
  }
  else {
    return false;
  }
}

const validateNombre=(nombre)=>{
  let lengthValid = nombre.length;
  if(!nombre){
    return false;
  }
  else if(lengthValid<3 || 80<lengthValid){
    return false;
  }
  else {
    return true;
  }
}

const validateDescripcion=(descripcion)=>{
  if(descripcion.length>80){
    return false;
  }
  else{
    return true;
  }
}

const validateCondicion=(condicion)=>{
  if(condicion.length>80){
    return false;
  }
  else{
    return true;
  }
}
const validateDireccion=(direccion)=>{
  if(!direccion){
    return false;
  }
  else{
    return true;
  }
}

const validateForm = () => {
  // get elements from DOM by using form's name.
  let myForm = document.forms["myForm"];
  let email = myForm["email"].value;
  let phoneNumber = myForm["celular"].value;
  let files = myForm["Foto"].files;
  let cantidad= myForm["cantidad"].value
  let fecha= myForm["fecha-disponibilidad"].value
  let tipo=myForm["tipo"].value
  let nombre=myForm["nombre"].value
  let region=myForm["region"].value
  let condicion=myForm["condiciones"].value
  let descripcion=myForm["descripcion"].value
  let direccion=myForm["calle-numero"].value
  // validation auxiliary variables and function.
  let invalidInputs = [];
  let isValid = true;
  const setInvalidInput = (inputName) => {
    invalidInputs.push(inputName);
    isValid &&= false;
  };

  // validation logic

  if (!validateNombre(nombre)){
    setInvalidInput("Nombre")
  }
  if (!validateEmail(email)) {
    setInvalidInput("Email");
  }
  if (!validatePhoneNumber(phoneNumber)) {
    setInvalidInput("Celular");
  }
  if (!validateFiles(files)) {
    setInvalidInput("Solo se aceptan fotografías");
  }
  if (!validateCantidad(cantidad)){
    setInvalidInput("La Cantidad debe ser mayor igual que cero")
  }
  if (!validateFecha(fecha)){
    setInvalidInput("La Fecha debe ser mayor o igual a la actual")
  }

  if (!validatePedido(tipo)){
    setInvalidInput("No ha ingresado Tipo")
  }
  if (!validateRegion(region)){
    setInvalidInput("No ha ingresado Region")
  }
  if (!validateDescripcion(descripcion)){
    setInvalidInput("Descripción muy larga")
  }
  if (!validateCondicion(condicion)){
    setInvalidInput("Condicion muy larga")
  }
  if (!validateDireccion(direccion)){
    setInvalidInput("Direccion")
  }

  // finally display validation
  let validationBox = document.getElementById("val-box");
  let validationMessageElem = document.getElementById("val-msg");
  let validationListElem = document.getElementById("val-list");

  if (!isValid) {
    validationListElem.textContent = "";
    // add invalid elements to val-list element.
    for (input of invalidInputs) {
      let listElement = document.createElement("li");
      listElement.innerText = input;
      validationListElem.append(listElement);
    }
    // set val-msg
    validationMessageElem.innerText = "Los siguiente campos son invalidos:";

    // make validation prompt visible
    validationBox.hidden = false;
  } else {
    document.getElementById('id01').style.display='block' 
  }
}




let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);

const redirigir = ()=> {
  window.location.href="/";
}


let submitBtn2 = document.getElementById("volver");
submitBtn2.addEventListener("click", redirigir);

const mostrarAlerta=()=> {
  alert('Hemos recibido la información de su pedido. Muchas gracias');
}

let submitBtn6 = document.getElementById("volver2");
submitBtn6.addEventListener("click", redirigir);