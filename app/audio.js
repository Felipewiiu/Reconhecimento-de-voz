const audio = document.querySelector("[data-audio]")
var audio2 = document.querySelector("[data-audio2]")
var audio3 = document.querySelector("[data-audioErro]")
const start = document.querySelector(".start")

function tocaSom (){
    audio.play()
}

start.addEventListener("click", ()=>{
    tocaSom()
    recognition.start()
})

function tocaSom2 (){
    audio2.play()
   
}