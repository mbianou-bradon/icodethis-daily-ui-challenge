const month = document.getElementById("month");
const year = document.getElementById("year");
const starter = document.getElementById("starter");
const pro = document.getElementById("pro");
const starter_in = document.getElementById("starter_in");
const pro_in = document.getElementById("pro_in");

month.addEventListener("click", ()=>{
    month.classList.add("bg-white");
    year.classList.remove("bg-white");
    starter.innerHTML = `<h2>$2.99/week</h2>`
    starter_in.innerHTML = "Billed monthly"
    pro.innerHTML = `<h2>$5.99/week</h2>`
    pro_in.innerHTML = "Billed monthly"
})

year.addEventListener("click", ()=>{
    year.classList.add("bg-white");
    month.classList.remove("bg-white");
    starter.innerHTML = `<h2>$8.99/month</h2>`
    starter_in.innerHTML = "Billed yearly"
    pro.innerHTML = `<h2>$21.99/month</h2>`
    pro_in.innerHTML = "Billed yearly"
})