const formularioalgorimos = document.getElementById("formularioalgorimos");
const contenedordatos = document.getElementById("contenedor-datos")



formularioalgorimos.addEventListener("submit", function(e) {
    e.preventDefault()
  const name= document.getElementById("name").value
  const body= document.getElementById("body").value
  const id = document.getElementById("id").value


  fetch("./algorismo.json", {
    method:"POST",
    body:JSON.stringify({
      title:name,
      body:body,
      id:id
    
    }),
    headers: {
      "content-Type":"application/json; charset=UTF-8"
    }
  })
  .then(function(res) {
    return res.json()
  })
 
  .then(function(data) {

    const almacenarlista=`<div>
    <h1>Lista de personal</h1>
    <div>
    <p>${data.id} </p>
    <p>${data.body} </p>
    <p>${data.name} </p>
    </div>
    </div>`
    contenedordatos.innerHTML=almacenarlista
   console.log( almacenarlista,"/n")

  })


});

