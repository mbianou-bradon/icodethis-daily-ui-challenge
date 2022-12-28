const container = document.querySelector(".range-slider");

const slider1 = document.querySelector(".slider-1")
const thumb = document.querySelector(".slider-thumb")
const tooltip = document.querySelector(".tooltip")
const progress = document.querySelector(".progress")

function customSlider(){
    const maxVal = slider1.getAttribute("max");
    const val = (slider1.value / maxVal) * 1500;

    tooltip.innerHTML = slider1.value;

    progress.style.width = val;
    thumb.style.left = val;
}

customSlider();

slider1.addEventListener("input", ()=>{
    customSlider();
})