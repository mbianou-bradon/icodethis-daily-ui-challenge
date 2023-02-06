const menu = document.getElementById("menu")
const more = document.getElementById("more")

menu.addEventListener("click", ()=>{
    more.classList.toggle("hidden")
})