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
    option.value = comuna;
    option.text = comuna.nombre;
    comunaSelector.appendChild(option);
});
});
});

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


const validateEmail = (email) => {
  if (!email) return false;
    // length validation
  let lengthValid = email.length > 15;
  
    // format validation
  let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let formatValid = re.test(email);
  
    // return logic AND of validations.
  return lengthValid && formatValid;
};

const validateCantidad = (cantidad)=> {
  if(!cantidad) return false;
  else if(cantidad<0) return false;
  else return true;
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
  else if(3>lengthValid || 80<lengthValid){
    return false;
  }
  else {
    return true;
  }
}

const validateDescripcion=(descripcion)=>{
  let lengthValid = descripcion.length;
  if(lengthValid>250){
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




const validateForm = () => {
  let myForm = document.forms["myForm"];
  let email = myForm["email"].value;
  let celular = myForm["celular"].value;
  let nombre = myForm["nombre"].value;
  let tipo = myForm["tipo"].value;
  let cantidad= myForm["cantidad"].value
  let region=myForm["region"].value
  let descripcion=myForm["descripcion"].value
  let cajon = document.getElementById('id01');
  
  
    // validation auxiliary variables and function.
  let invalidInputs = [];
  let isValid = true;
  const setInvalidInput = (inputName) => {
    invalidInputs.push(inputName);
    isValid = false;
  };
  
  if (!validateNombre(nombre)){
    setInvalidInput("Nombre")
  }

  if (!validateEmail(email)) {
    setInvalidInput("Email");
  }
  if (!validatePhoneNumber(celular)) {
    setInvalidInput("Celular");
  }

  if (!validateCantidad(cantidad)){
    setInvalidInput("Cantidad")
  }

  if (!validatePedido(tipo)){
    setInvalidInput("Tipo")
  }
  if (!validateRegion(region)){
    setInvalidInput("No ha ingresado Region")
  }
  if (!validateDescripcion(descripcion)){
    setInvalidInput("Descripción muy larga")
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
    
  } 
  else{
    document.getElementById('id01').style.display='block' 
  }  
}
  





const redirigir = ()=> {
  window.location.href="inicio.html";
}

let submitBtn2 = document.getElementById("volver");
submitBtn2.addEventListener("click", redirigir);

let submitBtn6 = document.getElementById("volver2");
submitBtn6.addEventListener("click", redirigir);

let submitBtn3 = document.getElementById("segundoboton");
submitBtn3.addEventListener("click", validateForm);



const mostrarAlerta=()=> {
  alert('Hemos recibido la información de su donación. Muchas gracias');
}