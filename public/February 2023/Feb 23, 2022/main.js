const pop = document.getElementById("pop")
const profile = document.getElementById("profile")
const pic = document.getElementById("pic")
const pic2 = document.getElementById("pic2")

profile.addEventListener("click", ()=>{
    // pop.classList.toggle("hidden")

    if (pop.classList.contains("hidden")){
        setTimeout(()=>{
            pop.style.transform= "scale(1)"
            pop.style.opacity = "1",
            pop.style.display = "block"
            pop.classList.remove("hidden")
        }, 300)
    } else if (!pop.classList.contains("hidden")) {
        setTimeout(()=>{
            pop.style.opacity = "0",
            pop.style.tabSize = "0",
            pop.classList.add("hidden")
        },100)
    }
})

profile.addEventListener("mouseenter", ()=>{
    pic.classList.add("bg-rose-400");
    pic.classList.remove("bg-cyan-500")
})

profile.addEventListener("mouseleave", ()=>{
    pic.classList.remove("bg-rose-400");
    pic.classList.add("bg-cyan-500")
})

pop.addEventListener("mouseenter", ()=>{
    pic2.classList.add("bg-rose-400");
    pic2.classList.remove("bg-cyan-500")
})

pop.addEventListener("mouseleave", ()=>{
    pic2.classList.remove("bg-rose-400");
    pic2.classList.add("bg-cyan-500")
})


