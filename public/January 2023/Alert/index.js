
const root = document.getElementById('root')
const newAlert = document.getElementById('newAlert')
const close = document.querySelectorAll(".close")
const tooltip = document.getElementById("cool");

console.log(close)

const moreAlert = [
    {
     color : 'green-500',
     textMessage : `Your object was successfully Created !`,
     icon : `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/></svg>`   
    },
    {
        color : `red-500`,
        textMessage : "Your object couldn't be Created !",
        icon : `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5"/><circle cx="8" cy="8" r="6.25"/></g></svg>`
    }
]

newAlert.addEventListener("click", () => {
    generateAlert();
    tooltip.classList.add("hidden")
});

function generateAlert(givenAlert) {
    const div = document.createElement("div");

    const type = givenAlert || moreAlert[Math.floor(Math.random() * moreAlert.length)];

    div.className = `w-full max-w-md bg-white shadow-[0.8rem_1rem_0.5rem_rgba(0,0,0,0.1)] opacity-100 transition`;
    console.log(type);
    div.innerHTML = `
        <div class="flex items-center justify-between px-4 py-4 gap-2">
            <div class="text-${type.color} text-2xl mt-1">${type.icon}</div>
            <h2 class="text-sm text-${type.color} font-semibold">${type.textMessage}</h2>
            <div><iconify-icon class="text-2xl text-slate-300 hover:text-slate-500 hover:scale-110 rounded cursor-pointer mt-1" icon="system-uicons:cross"></iconify-icon></div>
        </div>
    `;

    root.appendChild(div);

    setTimeout(() => {

        div.classList.remove("opacity-100");
        div.classList.add("opacity-0")

        setTimeout(() => {
            div.remove();
        }, 1000)

    }, 3000);
}

close.forEach((remove) => {
  remove.addEventListener('click', () => {
    remove.parentNode.remove();
  });
})


newAlert.addEventListener("mouseenter", ()=>{
    tooltip.classList.remove("hidden")
})


newAlert.addEventListener("mouseleave", ()=>{
    tooltip.classList.add("hidden")
})