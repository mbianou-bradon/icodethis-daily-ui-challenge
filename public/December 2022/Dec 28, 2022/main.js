
const rangeInputs = document.querySelectorAll('input[type="range"]')
const range_1 = document.getElementById('range_1')
const range_percentage = document.getElementById('range_percentage')
const output = document.getElementById("tooltip")

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

    const output = document.getElementById("tooltip")

    output.innerText = val;
}



range_1.addEventListener('input', handleInputChange)

