const watch = document.getElementById('watch')
const tooltip = document.getElementById('tooltip')
const modal = document.getElementById("myModal");
const close = document.getElementById("close");
const main = document.getElementById("main")
const subMain = document.getElementById("sub_main")

watch.addEventListener ('mouseenter', ()=>{
    tooltip.classList.remove('hidden')
})

watch.addEventListener('mouseleave',()=>{
    tooltip.classList.add('hidden')
})


// When the user clicks the button, open the modal 
watch.onclick = function() {
  modal.style.display = "block";
  tooltip.classList.add('hidden')
  main.classList.add('backdrop-blur-sm')
  subMain.classList.add('backdrop-blur-sm')
}

// When the user clicks on <span> (x), close the modal
close.addEventListener("click", ()=>{
    modal.style.display = "none";
    tooltip.classList.add('hidden')
    main.classList.remove('backdrop-blur-sm')
    subMain.classList.remove('backdrop-blur-sm')
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    main.classList.remove('backdrop-blur-sm')
    subMain.classList.remove('backdrop-blur-sm')
  }
}
