const redirigir = ()=> {
    window.location.href="inicio.html";
  }
let submitBtn = document.getElementById("volver");
submitBtn.addEventListener("click", redirigir);

const redirigir2 = ()=> {
    window.location.href="ver-donaciones.html";
  }
let submitBtn2 = document.getElementById("volver2");
submitBtn2.addEventListener("click", redirigir2);

function resizeImage() {
    this.style.width = "1280px";
    this.style.height = "1024px";
    return this;
}

let submitBtn3 = document.getElementById("foto");
submitBtn3.addEventListener("click", resizeImage);

