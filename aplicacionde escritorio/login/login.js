const btncheckbox = document.getElementById("btncheckbox");
const form= document.querySelector("form");
const btnbotonReset = document.getElementById("btnbotonReset");
const mensaje = document.getElementById("mensaje");
const password = document.getElementById("password")
const email = document.getElementById("email")
const mensajeInput = document.getElementById("mensajeInput");
const locarstoras = document.getElementById("locarstoras")



// fata validar los campos de contraseña, email y el boton reset
form.addEventListener("submit",(e)=> {
  e.preventDefault();
  if ( password.value == 123 && email.value =="alexyesid711@gmail.com") {
    window.location.href="../paginaPrincipal/paginaPrincipal.html"
  } else {
    alert("lo sentimos su credenciales no son correctas")
  }
  
//   if (email.value === "alexyesid711@gmail.com" && password.value === 12345) {

//     window.location.href="../aplicacion.html"
//   } else {
//     mensajeInput.textContent = "Falta email o Contraseña ";
//     mensajeInput.style.color = "red";
//     mensajeInput.style.fontSize = "15px";
  //   setTimeout(() => {
  //     mensajeInput.textContent = "";
  //   }, 3000);
  // }
});



// if (Number.NaN(password)) {
//   alert("si")
// } else {
//   alert("no")
// }
// let s=
// s.textContent = localStorage.getItem("alexyesid711@gmail.com")
// localStorage.getItem("password", "1234567890")

// btnbotonInicio.addEventListener("click",guardarDatos)
// function guardarDatos() {
// const password = document.getElementById("password")
// const email = document.getElementById("email")
// localStorage.email=email.value
// localStorage.password=password.value
// mostrarDatos()
// }

// function mostrarDatos() {
//  document.write(localStorage.email, "  <br>")
//  document.write(localStorage.password)
// }


// btnbotonInicio.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (btncheckbox.checked != "") {
//     window.open("http://127.0.0.1:5500/escritorio.html");
//   } else {
//     setTimeout(() => {
//       mensaje.textContent = "";
//     }, 3200);
//     mensaje.textContent = "Asepte los terminos";
//     mensaje.style.color = "red";
//     mensaje.style.fontSize = "20px";
//   }
// });




