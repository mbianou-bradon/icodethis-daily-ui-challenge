const root = document.getElementById('root');

const data = [
    {
        num: 1,
        image: "https://i1.sndcdn.com/artworks-uJSgpa2MPBz7-0-t500x500.jpg",
        title: "In My Feelings",
        artist: "Drake",
        views: "2,089,766"
    },
    {
        num: 2,
        image: "https://upload.wikimedia.org/wikipedia/en/8/82/Cardi_B%2C_Bad_Bunny_and_J_Balvin_-_I_Like_It_%28Single_Cover%29.png",
        title: "I Like it",
        artist: "Cardi B & Bad Bunny & J Balvin",
        views: "1,864,874"
    },
    {
        num: 3,
        image: "https://m.media-amazon.com/images/M/MV5BZGE2NjRiNGMtNGEzYi00MDk1LThmNmYtZDU0MGMxMjQyNzYxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg",
        title: "Better Now",
        artist: "Post Malone",
        views: "1,543,632"
    },
    {
        num: 4,
        image: "https://thesource.com/wp-content/uploads/2015/08/artworks-000349545501-pso8dg-t500x500.jpg",
        title: "Boo'd Up",
        artist: "Ella Mai",
        views: "1,234,877"
    },
    {
        num: 5,
        image: "https://upload.wikimedia.org/wikipedia/en/7/75/Drake_Nice_for_What.png",
        title: "Nice For What",
        artist: "Drake",
        views: "1,122,879"
    },
    {
        num: 6,
        image: "https://i1.sndcdn.com/artworks-hm37nHLLCTvkuwn0-hIlx4A-t500x500.jpg",
        title: "Yes Indeed",
        artist: "Lil Baby & Drake",
        views: "986,884"
    },
    {
        num: 7,
        image: "https://m.media-amazon.com/images/M/MV5BZTFmZmRjNzktYWU2OC00MjVhLTkxNTQtODBmMTcwNjY0YjEwXkEyXkFqcGdeQXVyNjc1Mjk5Njg@._V1_.jpg",
        title: "Love Lies",
        artist: "Khalid & Normani",
        views: "765,864"
    },
    {
        num: 8,
        image: "https://i.scdn.co/image/ab67616d0000b273f9f2d43ff44bdfbe8c556f8d",
        title: "Mine",
        artist: "Bazzi",
        views: "732,771"
    },
]

root.innerHTML = data.map(item => {

    return (
        `
        <div class="flex justify-between hover:bg-slate-900 hover:text-white p-2 rounded-lg">
            <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full border border-rose-400 flex items-center justify-center">
                    <h1>${item.num}</h1>
                </div>
                <div class="flex gap-4">
                    <div class="w-16 h-16 bg-red-400">
                        <img src=${item.image} alt="" class="h-full object-cover">
                    </div>
                    <div>
                        <h2 class="text-lg font-semibold">${item.title}</h2>
                        <p class="text-sm">${item.artist}</p>
                    </div>
                </div>  
            </div> 
            <p class="text-slate-500">${item.views}</p>
        </div>
        `
    )
}).join('');