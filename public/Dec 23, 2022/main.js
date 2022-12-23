let testimonialIndex = 1;
showTestimonial(testimonialIndex);

// Next/previous controls
function plusTestimonial(n) {
  showTestimonial(testimonialIndex += n);
}

// Thumbnail image controls
function currentTestimonial(n) {
  showTestimonial(testimonialIndex = n);
}

function showTestimonial(n) {
  let i;
  let testimonial = document.getElementsByClassName("testimonial");
  let vue = document.getElementsByClassName("vue");

  if (n > testimonial.length) {testimonialIndex = 1}

  if (n < 1) {testimonialIndex = testimonial.length}
  // for (i = 0; i < testimonial.length; i++) {
  //   testimonial[i].style.display = "none";
  // }

  for (i = 0; i < dots.length; i++) {
    vue[i].className = vue[i].className.replace(" active", "");
  }
  
  testimonial[testimonialIndex-1].style.display = "block";
  vue[testimonialIndex-1].className += " active";
}