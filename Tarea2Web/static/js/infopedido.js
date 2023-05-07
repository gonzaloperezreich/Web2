const redirigir = ()=> {
    window.location.href="inicio.html";
}
let submitBtn = document.getElementById("volver");
submitBtn.addEventListener("click", redirigir);

const redirigir2 = ()=> {
    window.location.href="ver-pedidos.html";
}
let submitBtn2 = document.getElementById("volver2");
submitBtn2.addEventListener("click", redirigir2);