const elementoChute = document.querySelector("#chute")
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition(); // É preciso instanciar essa classe

recognition.lang = 'pt-Br'
//recognition.start()


recognition.addEventListener('result', onSpeak)

function  onSpeak(e){
    let chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChuteValido(chute)
}

function exibeChuteNaTela (chute){
    elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
