const verifiedBadges = document.querySelectorAll(".verifiedBadge")
const badges = document.getElementsByClassName("badge")

verifiedBadges.forEach(verified =>{
    verified.addEventListener("mouseenter", (e)=>{
        e.target.badges.classList.toggle('hidden')
    })
})
