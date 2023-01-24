const watch = document.getElementById('watch')
const tooltip = document.getElementById('tooltip')

watch.addEventListener ('mouseenter', ()=>{
    tooltip.classList.remove('hidden')
})

watch.addEventListener('mouseleave',()=>{
    tooltip.classList.add('hidden')
})