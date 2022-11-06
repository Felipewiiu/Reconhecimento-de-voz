const audio = document.querySelector("[data-audio]")
var audio2 = document.querySelector("[data-audio2]")
const start = document.querySelector(".start")

function tocaSom (){
    audio.play()
}

start.addEventListener("click", ()=>{
    tocaSom()
})

function tocaSom2 (){
    audio2.play()
}