const project = document.getElementById('project')
const open = document.getElementById('open-menu')
const close = document.getElementById('close-menu')
const circular = document.getElementById('circular')
open.addEventListener("click", ()=>{
    project.classList.toggle('hidden')
})

close.addEventListener("click", ()=>{
    project.classList.toggle('hidden')
})

circular.addEventListener("click", ()=>{
    circular.classList.add('rotation')
})

circular.removeEventListener("dblclick", ()=>{
    circular.classList.remove('rotation')
})