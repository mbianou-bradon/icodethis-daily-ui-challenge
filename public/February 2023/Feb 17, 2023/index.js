const root = document.getElementById("root");


const dataSet = [
    {
        image: "https://yorkdale.com/wp-content/uploads/2021/09/1354cd7261a0b0a6fa96b6424e0c836cab9250b4-1.png",
        title: "Prepare structural documentation",
        date: "18 Dec 2021",
        tags: "Architecture",
        people: 3,
        comments: 17,
        level: "High",
        color: "bg-pink-500"
    },
    {
        image: "https://secure.img1-cg.wfcdn.com/im/59541679/resize-h600-w600%5Ecompr-r85/2128/212882425/Bosch.jpg",
        title: "Update requirement list",
        date: "18 Dec 2021",
        tags: "Management",
        people: 2,
        comments: 8,
        level: "Medium",
        color: "bg-blue-700"
    },
    {
        image: "https://secure.img1-cg.wfcdn.com/im/59541679/resize-h600-w600%5Ecompr-r85/2128/212882425/Bosch.jpg",
        title: "New UI for dashboard",
        date: "18 Dec 2021",
        tags: "Architecture",
        people: 7,
        comments: 77,
        level: "Low",
        color: "bg-green-600"
    },
    {
        image: "https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png",
        title: "Initial landing page concepts",
        date: "18 Dec 2021",
        tags: "Architecture",
        people: 4,
        comments: 2,
        level: "Low",
        color: "bg-green-600"
    }
]




root.innerHTML = dataSet.map((data)=>{

    return `

    <div class="p-4 grid grid-cols-5 bg-white rounded-sm">
        <div class="w-12 h-12 rounded-full bg-slate-100 hover:scale-105 shadow-md shadow-slate-500">
            <img src=${data.image} alt="" class="h-full aspect-square object-cover w-auto rounded-full shadow-md">
        </div>
        <div class="col-span-4">
            <div class="flex text-sm justify-between">
                <h2 class="px-2 py-0.5 ${data.color} text-white rounded text-xs font-semibold">${data.level}</h2>
                <p class="text-slate-500 text-xs">18 Dec 2022</p>
            </div>
            <div class="my-3">
                <p class="text-l text-blue-500 font-semibold">${data.title}</p>
                <div class="flex gap-1 text-xs font-semibold [&>*]:rounded [&>*]:bg-slate-100 [&>*]:px-1.5 [&>*]:py-0.5 [&>*]:text-slate-400">
                    <h2>Development</h2>
                    <h2>${data.tags}</h2>
                </div>
                <div class="flex justify-between mt-3 [&>*]:flex [&>*]:items-center [&>*>p]:text-xs [&>*]:gap-1 [&>*>div]:text-lg [&>*>div]:pt-1 text-slate-500">
                    <div>
                        <div>
                            <iconify-icon icon="material-symbols:person-4"></iconify-icon>
                        </div>
                        <p>${data.people} people work on this</p>
                    </div>

                    <div>
                        <div>
                            <iconify-icon icon="simple-icons:googlemessages"></iconify-icon>
                        </div>
                        <p>${data.comments} comments</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    `
}).join("")