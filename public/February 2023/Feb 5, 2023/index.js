const more = document.getElementById("more")
const extra = document.getElementById("extra")

more.addEventListener("click", ()=>{
    extra.classList.toggle("hidden")
    const text = "More..."
    if(more.innerText === text){
        return more.innerText = "Less..."
    }
    if (more.innerText != text){
        return more.innerText = "More..."
    }
})