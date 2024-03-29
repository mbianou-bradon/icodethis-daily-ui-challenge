const root = document.getElementById("root")


const userData = [
    {
        userName: "Mbianou Bradon",
        profileImage : "https://res.cloudinary.com/practicaldev/image/fetch/s--4JL5abHt--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1035172/ddd0c7d5-5a6b-4191-b822-02745bea888d.png"
    },
    {
        userName: "Kimboh Lovette",
        profileImage : "https://media.licdn.com/dms/image/D4E03AQH7P9arsYmElA/profile-displayphoto-shrink_800_800/0/1671708712233?e=2147483647&v=beta&t=2zGHmVsWVcsifWCCt_FAuZr8vytcaU_nCc-twF-iWCk"
    },
    {
        userName: "Florin Pop",
        profileImage : "https://yt3.googleusercontent.com/cs7kGRac3WXF6cidW6N9cfDUEc4vYVIWdqQGL6Iuba7uwfLpFxFC0zLqbOblvSFHb1tb0QTz=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        userName: "Adrian Lica",
        profileImage : "https://media.licdn.com/dms/image/C4E03AQEvvbJVGMtDWg/profile-displayphoto-shrink_200_200/0/1577999315397?e=1680739200&v=beta&t=ps3VVA6fmP-zU8pWNZg31wUrD_bTHa0vd6nGoPc2-3g"
    },

]

root.innerHTML = userData.map(friend => {
    return (
        `<div class="flex items-center gap-2 mb-5">
            <div class="w-14 h-14 rounded-full p-1 hover:scale-105 bg-blue-200/80 overflow-hidden">
                <img src=${friend.profileImage} alt="" class="rounded-full w-full">
            </div>
            <div class="font-semibold text-blue-600 mr-auto"><h2>${friend.userName}</h2></div>
            <button class="btn follow_friend px-4 py-2 bg-blue-700 text-slate-100 rounded-full text-sm font-semibold hover:bg-white border border-blue-700 hover:text-blue-700 shadow-md shadow-blue-700">follow</button>
        </div>`
    )

}).join('')



window.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        e.target.classList.contains("follow_friend")
            ? (e.target.textContent = "unfollow")
            : (e.target.textContent = "follow");
       
    
        e.target.classList.toggle("follow_friend");
    }

    
});





  
            
