const music = document.getElementById("music")
const play = document.getElementById("play")
const pause = document.getElementById("pause")

music.addEventListener("click", () => {
    play.classList.toggle("hidden")
    pause.classList.toggle("hidden")
})