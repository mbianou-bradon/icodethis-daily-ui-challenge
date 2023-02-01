const root = document.getElementById("root")
const darkMode = document.getElementById("dark-mode")
const lightMode = document.getElementById("light-mode")
const menu = document.getElementById("menu")
const app = document.getElementById("app")

darkMode.addEventListener("click", ()=>{
    darkMode.classList.toggle("hidden")
    lightMode.classList.toggle("hidden")
    root.classList.add("bodyDarkMode")
    menu.classList.add("menuDarkMode")
    app.classList.add("gotoAppDarkMode")
})

lightMode.addEventListener("click", ()=>{
    darkMode.classList.toggle("hidden")
    lightMode.classList.toggle("hidden")
    root.classList.remove("bodyDarkMode")
    menu.classList.remove("menuDarkMode")
    app.classList.remove("gotoAppDarkMode")
})