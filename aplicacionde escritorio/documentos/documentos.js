// const docForm = document.getElementById('doc-form');
// const confirmation = document.getElementById('confirmation');

// docForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Aquí puedes agregar código para enviar la información a tu servidor o procesarla de otra manera
    // Por ahora, simplemente mostraremos un mensaje de confirmación

//     docForm.style.display = 'none'; // Ocultar el formulario
//     confirmation.style.display = 'block'; // Mostrar el mensaje de confirmación
// });


// esto es para el chatbo
const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const asistente  = document.getElementById("asistente")
const whatsapp = document.getElementById("whatsapp")
const chatcontainer = document.getElementById("chat-container")
const fawhatsapp= document.querySelector(".fa-whatsapp")

setTimeout(() => {
    fawhatsapp.classList.remove("fa-beat")
}, 3000);
whatsapp.addEventListener("click",function(){
    chatcontainer.style.display="inline"
    setInterval(() => {
        asistente.innerText="hola soy tu asistente virtual"
    }, 500);
})
const responses = {
    '¿Qué es la inteligencia artificial?': 'La inteligencia artificial (IA) se refiere a la simulación de procesos de inteligencia humana por parte de sistemas de computación.',
    '¿Cuáles son las aplicaciones de la IA?': 'La IA tiene muchas aplicaciones, como el procesamiento de lenguaje natural, visión por computadora, robótica, juegos y más.',
    '¿Cuál es el futuro de la IA?': 'El futuro de la IA es emocionante y se espera que continúe creciendo en áreas como la automatización, la toma de decisiones y la asistencia virtual.',
    '¿Cuáles son las principales técnicas de IA?': 'Algunas técnicas de IA incluyen el aprendizaje automático, las redes neuronales, el procesamiento de lenguaje natural y la visión por computadora.'
};

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    
    if (userMessage !== '') {
        // Agregar el mensaje del usuario al chat

        chatOutput.innerHTML += `<div class="user-message">Tú: ${userMessage}</div>`;
        
        // Obtener la respuesta del chatbot
fetch("https://dialogflow.googleapis.com/$discovery/rest?version=v2")
.then(res => res.json())
.then(res => res.json())
        const response = responses[userMessage] || 'Hola es un praser ayudarte';
        
        // Agregar la respuesta del chatbot al chat
        chatOutput.innerHTML += `<div class="bot-message">Chatbot: ${response}</div>`;
        
        // Limpiar el campo de entrada
        userInput.value = '';
        
        // Desplazarse al último mensaje
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
