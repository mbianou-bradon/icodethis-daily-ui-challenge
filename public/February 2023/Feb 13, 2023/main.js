const root = document.getElementById("root");

const data = [
    {
        name: "Jay Resse",
        project: 2,
        prototypes: 6,
        image: "https://images.unsplash.com/photo-150439"
    },
    {
        name: "Carlos Ramos",
        project: 3,
        prototypes: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkzQpIhe8c4_n7uR4yR69699ogUBKtkCdCA&usqp=CAU"
    },
    {
        name: "Eugenia Grant",
        project: 7,
        prototypes: 13,
        image: "https://media.licdn.com/dms/image/D4E03AQFx3bZ7ccQrYg/profile-displayphoto-shrink_800_800/0/1670876336390?e=2147483647&v=beta&t=dzZZ6_uIycPpnrHEsMrfcj5PSnYYNAGSY4SD0Jo4l18"
    },
    {
        name: "Lelia Marshall",
        project: 6,
        prototypes: 24,
        image: "https://media.licdn.com/dms/image/C4E03AQEY6taVipVeiQ/profile-displayphoto-shrink_800_800/0/1563474567772?e=2147483647&v=beta&t=Q2ZU98YgL-bo75q_Alids-9ANrn_tMxWs6ihZKkkvRM"
    },
    {
        name: "Olivia Campbell",
        project: 2,
        prototypes: 16,
        image: "https://www.verywellfamily.com/thmb/uwXweE8auRCSONNwJvOIO42lZbg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/OliviaCampbell-headshot1-eae84fcdc432429d99556bd8cde15fc6.jpg"
    },
    {
        name: "Bernice Alvarado",
        project: 2,
        prototypes: 5,
        image: "https://media.licdn.com/dms/image/C5603AQFaKOOhOnn9oQ/profile-displayphoto-shrink_800_800/0/1648135946018?e=2147483647&v=beta&t=w2Ou9uPbcJ6ltdEKwLFK_kuqUTW6SvUxIyTwf-wc9Ss"
    }
]


root.innerHTML = data.map(project => {
    return `
    <div class="card">
        div
        <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">Project: ${project.project}</p>
        </div>
    </div>
    `
}).join("");