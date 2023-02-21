const root = document.getElementById("root");
const fulls = document.querySelectorAll(".full");
const feeds = document.querySelectorAll(".feed");

fulls.forEach((full, fullIndex)=>{
    full.addEventListener("click", ()=>{
        feeds.forEach((feed, feedIndex)=>{
            if(fullIndex == feedIndex){
                feed.classList.toggle("hidden");
            }
        })
    })
})

const issueData = [
    {
        date: "Mar 22, 2023",
        title:  "Users are unable to rearrange screens",
        desc: "Our engineers have resolved the issues where users were unable to rearrange screens in V6 prototypes. Please reach out to our support team",
        status: "Resolved",
        color: "bg-green-500"
    },
    {
        date: "Mar 6, 2023",
        title:  "Cloud V7 users maybe experiencing some slowness or issues loaing projects",
        desc: "Our engineers have resolved the issues where users were unable to rearrange screens in V6 prototypes. Please reach out to our support team",
        status: "Monitoring",
        color: "bg-orange-700"
    },
    {
        date: "Feb 28, 2023",
        title:  "Some screens are not loading or loading intermittently for v7 users",
        desc: "Our engineers have resolved the issues where users were unable to rearrange screens in V6 prototypes. Please reach out to our support team",
        status: "Investigating",
        color: "bg-red-500"
    }
]


root.innerHTML = issueData.map(issue => {
    
    return( 
    `
    <div>
        <div class="flex flex-col justify-evenly py-3 px-6 w-full sm:max-w-[45rem] sm:h-[12.5rem] bg-white rounded border border-transparent hover:border-blue-400 shadow-[0rem_0rem_0.25rem_0.001rem_rgba(147,197,253,1)] relative before:content-[''] before:absolute before:w-1 before:h-1/2 before:bg-slate-300 before:-bottom-14 before:left-[7%] before:-z-10">
            <h2 class="text-xs">${issue.date}</h2>
            <div class="font-semibold sm:w-[70%]">
                <h2>${issue.title} <span class="text-xs px-2 py-0.5 text-white ${issue.color} rounded">${issue.status}</span></h2>
            </div>
            <p class="text-sm sm:w-[80%] my-5">
                Our engineers have resolved the issue where users unable to rearrange screens in V6 prototypes. Please reach out to our support team
            </p>

            <div class="full flex gap-2 items-center px-3 py-1.5 text-xs bg-slate-200/30 w-fit rounded cursor-pointer hover:bg-slate-800 hover:text-white active:scale-95">
                <h2>Full Report</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="evaArrowForwardOutline0"><g id="evaArrowForwardOutline1"><path id="evaArrowForwardOutline2" fill="currentColor" d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23a1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2Z"/></g></g></svg>
                </div>
            </div>
        </div>


        <div class="feed hidden w-full sm:max-w-[44rem] p-10 bg-white backdrop-blur-lg z-20">
            <h2 class="text-xs">${issue.date}</h2>
            <div class="font-semibold sm:w-[70%] mt-2">
                <h2 class="uppercase">${issue.title} <span class="text-xs px-2 py-0.5 text-white ${issue.color} rounded">${issue.status}</span></h2>
            </div>
            <div class="my-5">
                <h2 class="mb-3 font-semibold">Feedback Description</h2>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias porro esse incidunt laudantium similique velit, voluptatum
                    consequuntur rem blanditiis corrupti pariatur minus distinctio commodi asperiores consequatur earum deleniti ea.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam assumenda suscipit rerum quibusdam deleniti porro quod amet perspiciatis ipsa cum,
                    architecto nesciunt vitae tempore impedit quo similique nostrum laboriosam accusantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis unde, alias natus recusandae pariatur doloremque nulla autem quas ut eum ipsam
                    rem iusto a, magni, excepturi sint voluptatem quo dolorem.
                </p>
            </div>
            <div class="text-sm sm:w-[80%] my-5">
                <h2>Reply</h2>
                <p>
                    Our engineers have resolved the issue where users unable to rearrange screens in V6 prototypes. Please reach out to our support team
                </p>
            </div>
        </div>
    </div>
    `
    )
}).join("")