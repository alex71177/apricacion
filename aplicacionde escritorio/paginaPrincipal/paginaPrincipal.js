const menu =  document.getElementById("menu")
const btnmenuhambuguesa = document.getElementById("btnmenuhambuguesa")

btnmenuhambuguesa.addEventListener("click",function(e) {
    e.preventDefault()
  
    if (menu.style.display === "none") {
        menu.style.display = "inline"       
       } else {
        menu.style.display = "none"
       } 
}) 


