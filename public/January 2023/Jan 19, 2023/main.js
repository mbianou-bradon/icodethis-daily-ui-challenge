const tooltip = document.getElementById('tooltip')
const profile = document.getElementById('profile')
const profile2 = document.getElementById('profile2')
const out = document.getElementById('out')
const arrow = document.getElementById('arrow')

profile.addEventListener('mouseover', () => {
    tooltip.classList.remove('tooltip2')
    tooltip.classList.remove('hidden')
    tooltip.classList.add('tooltip1')
    arrow.classList.add('arrow1')
})

out.addEventListener('click', () => {
    tooltip.classList.add('hidden')
    tooltip.classList.remove('tooltip1')
    arrow.classList.remove('arrow1')
    tooltip.classList.remove("rotation");
})

profile2.addEventListener('mouseover', () => {
    tooltip.classList.remove('tooltip1')
    tooltip.classList.remove('hidden')
    tooltip.classList.add('tooltip2')
    arrow.classList.add('arrow2')
})



profile.addEventListener("click", () => {
    setTimeout(openTooltip, 1000)
})

profile2.addEventListener("click", () => {
    setTimeout(openTooltip, 1000)
})


const openTooltip = () => {
    tooltip.classList.add("rotation");
    tooltip.classList.add("-translate-y-[25px]");
    tooltip.classList.remove("invisible")
    tooltip.classList.remove("translate-y-0");
}