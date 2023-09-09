
  const progreso=document.getElementById(`progreso`)
  const porcentaje=document.getElementById(`porcentaje`)
  let cantidad=0

  let tiempo= setInterval(() => {
    cantidad +=1
    progreso.style.width =`${cantidad}% `

  if (cantidad == 100) {

   window.open("../login/login.html"); 
   window.close("../login/login.html")
  //  window.close("../inicioInterfaz"); 
    clearInterval(tiempo)
  }
   porcentaje.textContent=`${cantidad}% `
  }, 200);

  