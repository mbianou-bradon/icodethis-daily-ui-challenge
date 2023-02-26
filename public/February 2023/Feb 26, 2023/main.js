const hero = document.getElementById("hero")
const recommend = document.getElementById("recommended")
const topRating = document.getElementById("top")

const star_full = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>`;
const star_empty = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>`
const heroData = [
    {
        image: "https://i.scdn.co/image/ab67616d0000b273754b2fddebe7039fdb912837",
        title: "This is acting (Delux version)",
        price: "18",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Hurts_-_Desire.png",
        title: "Desire",
        price: "18",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://i.scdn.co/image/ab67616d0000b27390a788beadaad34ff684d3ec",
        title: "Human (Delux)",
        price: "18",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://www.azlyrics.com/images/albums/494/24a7970a4acd43a2b69b21b42a02f1c3.jpg",
        title:"Whatever You Want",
        price: "18",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    }
]

const topData = [
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/8f/dd/bf/8fddbf91-e443-5f22-995b-ff18d6ef6792/886444692205.jpg/1200x1200bf-60.jpg",
        title: "Love Stuff",
        desc: "Love Stuff is the debut studio album by American singer and songwriter Elle King It was released",
        price: "20",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://d7hftxdivxxvm.cloudfront.net/?height=533&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FDmH3jfVIJrdLotw5Ks82ng%2Fnormalized.jpg&width=800",
        title: "Demon Days",
        desc: "Demon Days is the second studio album by British virtual band Gorillaz, released on 11 May 2005",
        price: "20",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/8f/dd/bf/8fddbf91-e443-5f22-995b-ff18d6ef6792/886444692205.jpg/1200x1200bf-60.jpg",
        title: "Love Stuff",
        desc: "Love Stuff is the debut studio album by American singer and songwriter Elle King It was released",
        price: "20",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    }
]

const recommendData = [
    {
        image: "https://cdns-images.dzcdn.net/images/artist/022787f764f053c0aac3ccc3c75f0dc8/500x500.jpg",
        title: "Helplessly",
        price: "12",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_full} ${star_empty}
        `
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHDusiDpELP5tj3kokI2zWSePqNOMyEhXunDJe_OR2i4082XzF2iwC0P4UqV1PmljEXE&usqp=CAU",
        title: "Like You",
        price: "15",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtuttgzg67f4EyIrAVb0nvz7LvpW9myXdoZeVeNm9Qp3Op5gxc-coso3ZLDkCM2jKqYI&usqp=CAU",
        title: "You Mean to Tell Me",
        price: "14",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_full} ${star_empty}
        `
    },
    {
        image: "https://i.scdn.co/image/ab67616d0000b2733a88c4c75308588b77cfaec1",
        title: "B.O.M.O",
        price: "15",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    },
    {
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/ed-sheeran-cover-story-rolling-stone-interview-8e2ddd75-2223-4cad-ae6a-247b9f0d9e9b.jpg",
        title: "Shape of You",
        price: "20",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_full} ${star_full}
        `
    },
    {
        image: "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6",
        title: "Perfect",
        price: "16",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_full} ${star_empty}
        `
    },
    {
        image: "https://www.rollingstone.com/wp-content/uploads/2020/12/AP_19358486545282.jpg",
        title: "Bad Habits",
        price: "14",
        rating: `
            ${star_full} ${star_full} ${star_full} ${star_empty} ${star_empty}
        `
    }
]



const recommendCard = (image, title, price, rating) => {
    const card = document.createElement("div")

    card.classList = `w-[8rem] bg-white p-0.5 hover:scale-[1.02] cursor-pointer`;
    card.innerHTML = `
        <div class="w-full h-[8rem]">
            <img src=${image} alt="" class="h-full w-full object-cover">
        </div>
        <div>
            <div class="mb-2 py-1 flex items-center justify-between">
                <!-- Rating -->
                <div class="flex items-center text-violet-600">
                    ${rating}
                </div>
                <!-- Price -->
                <p>$ ${price}</p>
            </div>
            <!-- Title -->
            <p class="font-bold">${title}</p>
        </div>
    
    `;

    recommend.appendChild(card);
}

const heroCard = (image, title, price, rating) => {
    const card = document.createElement("div")

    card.classList = `w-[8rem] bg-white p-0.5 hover:scale-[1.02] cursor-pointer`;
    card.innerHTML = `
        <div class="w-full h-[8rem]">
            <img src=${image} alt="" class="h-full w-full object-cover">
        </div>
        <div>
            <div class="mb-2 py-1 flex items-center justify-between">
                <!-- Rating -->
                <div class="flex text-violet-600">
                    ${rating}
                </div>
                <!-- Price -->
                <p>$ ${price}</p>
            </div>
            <!-- Title -->
            <p class="font-bold px-2 mb-2">${title}</p>
        </div>
    
    `;

    hero.appendChild(card);
}

const topCard = (image, title, price, rating, desc) => {
    const card = document.createElement("div")

    card.classList = ` w-full sm:w-[18rem] gap-16 grid grid-cols-3 cursor-pointer bg-white hover:bg-slate-800 hover:text-white`;
    card.innerHTML = `
        <div class="h-[8rem] w-[6.4rem] bg-red-300">
            <img src=${image} alt="", class="h-full w-full object-cover">
        </div>
        <div class="col-span-2 py-2">
            <!-- Rating and price -->
            <div class="flex items-center justify-between pr-4">
                <div class="flex items-center text-violet-600">
                    ${rating}
                </div>
                <p>$ ${price}</p>
            </div>
            <!-- Title and description -->
            <div>
                <h2 class="font-bold mb-3">${title}</h2>
                <p class="p-1">${desc}</p>
            </div>
        </div>
    
    `;

    topRating.appendChild(card);
}


heroData.map((item)=> {heroCard(item.image, item.title, item.price, item.rating)});

topData.map((item)=> {topCard(item.image, item.title, item.price, item.rating, item.desc)});

recommendData.map((item)=> {recommendCard(item.image, item.title, item.price, item.rating)});












