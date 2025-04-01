import { deleteSportsmanAPI } from "./api/deleteSportsmanAPI.js"
import { getSportsmanAPI } from "./api/getSportmanAPI.js"
import { createMurkup } from "./createMarkup.js"
import { addToFavorite } from "./favoriteHandler.js"


const button = document.querySelector(".delete")
const closeModal = document.querySelector(".delete__close")
const backdrop = document.querySelector(".delete__backdrop")

const form = document.querySelector(".delete__modal")

closeModal.addEventListener("click", () => {
    backdrop.style.display = "none"
})

button.addEventListener("click", () => {
    backdrop.style.display = "flex"
})


form.addEventListener("submit", async (e) => {
        e.preventDefault()
        console.log(e.target.elements)
        const sportsmanData = {
            id: e.target.elements.id.value,
        }
    console.log(sportsmanData)
       await deleteSportsmanAPI(sportsmanData)
       await getSportsmanAPI().then((data) => {
            createMurkup(data)
            const items = document.querySelectorAll(".list__item")
            addToFavorite(items)
            return data
        })
        
        backdrop.style.display ="none"
    })