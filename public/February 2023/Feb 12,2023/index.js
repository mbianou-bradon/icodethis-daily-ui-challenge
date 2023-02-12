
const btn = document.getElementById("btn");
const btn_inner = document.getElementById("inner")

    btn.addEventListener("click", () => {
        document.getElementById("more").classList.toggle("hidden");
        const text = "Show more"

        if (inner.innerText = text ) {
         inner.innerText = "Show less"
        }

        if (inner.innerText != text) {
         inner.innerText = "Show more"
        }
    })
