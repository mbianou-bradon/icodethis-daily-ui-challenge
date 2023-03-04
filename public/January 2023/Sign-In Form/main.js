const modal = document.getElementById("myModal");
const signbtn = document.getElementById("sign");
const close = document.getElementById("close");

// When the user clicks the button, open the modal 
signbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.addEventListener("click", ()=>{
    modal.style.display = "none";
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
