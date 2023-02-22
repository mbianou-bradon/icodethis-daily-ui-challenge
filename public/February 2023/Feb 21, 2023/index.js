const root = document.getElementById("root");
const userAdd = document.getElementById("addUser")
const add = document.getElementById("add")
const userNameInput = document.getElementById("userName")

const imageData = [
  "http://www.academicschoice.com/images/apps/zap-zap-math.png",
  "https://cdn.dribbble.com/users/948184/screenshots/2275412/media/421015639ee822b39d7173ca45ecd3ac.gif",
  "https://cdn-icons-png.flaticon.com/512/2040/2040732.png",
  "https://avatars.githubusercontent.com/u/72765949?v=4",
  "https://www.agnosticdev.com/sites/default/files/styles/retina_image/public/2016-07/rocket_0.png?itok=5Y4Ddmsl",
];



const playerData = [
  {
    image: "https://avatars.githubusercontent.com/u/72765949?v=4",
    userName: "Brad",
  },
  {
    image: "https://cdn.dribbble.com/users/948184/screenshots/2275412/media/421015639ee822b39d7173ca45ecd3ac.gif",
    userName: "garlic-moon",
  }
];

const renderCards = (image, userName) => {

    const div = document.createElement("div")
    div.className = `relative`;
    div.innerHTML =  `
          <div class=" close hidden absolute top-1 right-1 text-red-600 cursor-pointer hover:shadow-red-700 shadow shadow-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
            <div class="w-20 h-20 rounded-full bg-teal-600 p-0.5">
                <img src=${image} alt="" class="h-full object-cover rounded-full">
            </div>
            <h2 class="font-semibold">${userName}</h2>
    
    `
    root.appendChild(div);
}

const createUsers = (userInput) => {
    const y = Math.floor(Math.random() * imageData.length);
    userInput = userNameInput.value
    
    let newUser = {
        image: imageData[y],
        userName: userInput
    }
   const newUserCard = document.createElement("div");
   newUserCard.className = `relative`;
     newUserCard.innerHTML =  `
    <div class=" close hidden absolute top-1 right-1 text-red-600 cursor-pointer hover:shadow-red-700 shadow shadow-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

    </div>
    <div class="w-20 h-20 rounded-full bg-teal-600 p-0.5">
        <img src=${newUser.image} alt="" class="h-full object-cover rounded-full">
    </div>
    <h2 class="font-semibold">${newUser.userName}</h2>
    
    `
    root.appendChild(newUserCard)
   
}


playerData
  .map((player) => {
    
    return (renderCards(player.image, player.userName)) 
  })
  .join("");


const closeCard = document.querySelectorAll(".close")


closeCard.forEach(close => 
    close.addEventListener("click", () => {
    close.parentNode.remove();
})
);

document.getElementById("manage").addEventListener("click", () => {
    closeCard.forEach(close => {
        close.classList.toggle("hidden");
    })
})

userAdd.addEventListener("click", () => {
    document.getElementById("inputUser").classList.remove("hidden");
})

document.getElementById("add").addEventListener("click", () => {
    createUsers()
    document.getElementById("inputUser").classList.add("hidden")
    closeCard.forEach(close => {
        close.classList.add("hidden");
    })
})
