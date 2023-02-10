const root = document.getElementById('root');

const cardData = [
    {
        imgage: "https://demo.themesberg.com/leaf/assets/img/forest.svg",
        title: "Leaf - Non Profit Environmental",
        description: "Clean Environmental Bootstrap 4 Theme",
        price: "$49"
    },
    {
        imgage: "https://cdn.dribbble.com/users/526080/screenshots/7967999/media/50db5a6fc6783a00cf3ce7157346bb02.png?compress=1&resize=768x576&vertical=top",
        title: "Spaces - Coworking Real Estate",
        description: "Corporate Coworking Bootstrap 4 Theme",
        price: "$49"
    },
     {
        imgage: "https://themesberg.s3.us-east-2.amazonaws.com/public/products/pixel-lite/pixel-lite-preview.jpg",
        title: "Pixel Pro - Bootstrap 4 UI KIT",
        description: "Premium Bootstrap 4 UI Kit with Sass & Gulp",
        price: "$59"
    },
    {
        imgage: "https://s3.amazonaws.com/stellar-blue-wpengine-venus-wp-media-folder/WP%20Media%20Folder%20-%20trident-automation/wp-content/uploads/2017/06/Windows-98.png",
        title: "Windows 95 UlKit",
        description: "Retro and nostalgic Windows 95 UI Kit",
        price: "Free"
    },
    {
        imgage: "https://d4.alternativeto.net/KZTmEzM1KetCWdDkP2nE8Yj2TSoHcR8tng85uq62t2g/rs:fill:400:225:1/g:ce:0:0/YWJzOi8vZGlzdC9zL3BpeGVsLWxpdGUtYm9vdHN0cmFwLXVpLWtpdF85MTIxMjBfZnVsbC5qcGc.jpg",
        title: "Pixel Lite - Free Bootstrap 4 UIKIT",
        description: "Free and clean Bootstrap 4 UI Kit",
        price: "Free"
    }
]

root.innerHTML = cardData.map(card => {
    return(
    `   <div class = "w-full sm:max-w-[18rem] p-3 bg-white rounded-sm">
            <div class="h-40 mb-2">
                <img src=${card.imgage} alt="" class="h-full object-cover w-full">
            </div>
            <div>
                <div class="relative font-bold mb-3">
                    <h2 class="w-3/5">${card.title}</h2>
                    <p class="absolute top-0 right-1">${card.price}</p>
                </div>
                <div class="text-xs text-slate-200">
                    <p>${card.description}</p>
                </div>
            </div>
        </div>   `
    )
}).join('')

  