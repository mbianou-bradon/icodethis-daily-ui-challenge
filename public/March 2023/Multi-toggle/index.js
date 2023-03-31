const elem = document.querySelectorAll(".element");

console.log(elem);

elem.forEach(item => {

    item.addEventListener("click", ()=> {
        item.classList.toggle("shadow-[0rem_0rem_0.3rem_0.2rem_rgba(244,63,94,0.8)]");
        console.log("Clicked")
    })
    
})