const root = document.getElementById("root")

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
    <div class="flex flex-col justify-evenly py-3 px-6 w-full sm:max-w-[45rem] h-[12.5rem] bg-white rounded shadow shadow-slate-200">
        <h2 class="text-xs">${issue.date}</h2>
        <div class="font-semibold flex gap-2 w-[70%]">
            <h2>${issue.title} <span class="text-sm px-2 py-0.5 text-white ${issue.color} rounded">${issue.status}</span></h2>
        </div>
        <p class="text-sm w-[80%] my-5">
            Our engineers have resolved the issue where users unable to rearrange screens in V6 prototypes. Please reach out to our support team
        </p>

        <div class="px-3 py-1.5 text-sm bg-slate-200/30 w-fit rounded"><h2>Full Report</h2></div>
    </div>
    `
    )
}).join("")