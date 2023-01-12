const testimonial1 = document.getElementById("testimonial1");
const testimonial2 = document.getElementsById("testimonial2");
const testimonial3 = document.getElementsById("testimonial3");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

let testimonial = [testimonial1,testimonial2, testimonial3]
let vue = []
vue = document.getElementsByClassName("vue");

let testimonialIndex = 1;
showTestimonial(testimonialIndex);

function showTestimonial(n) {
  let i;

  if (n > testimonial.length) {testimonialIndex = 1}

  if (n < 1) {testimonialIndex = testimonial.length}

  if (i = 0 || i < testimonial.length) {

    testimonial[i].style.display = "none";
  }

  for (i = 0; i < vue.length; i++) {
    vue[i].className = vue[i].className.replace(" active", "");
  }
  
  testimonial[testimonialIndex-1].style.display = "flex";
  vue[testimonialIndex-1].className += " active";
}

// Next/previous controls
function plusTestimonial(n) {
  showTestimonial(testimonialIndex += n);
}

// Thumbnail image controls
function currentTestimonial(n) {
  showTestimonial(testimonialIndex = n);
}

previous.addEventListener("click", ()=>{
   plusTestimonial(-1)
})

next.addEventListener("click", ()=>{
   plusTestimonial(1)
})