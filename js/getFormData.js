import { addSportsmanAPI } from "./api/addSportsmanAPI.js";
import { getSportsmanAPI } from "./api/getSportmanAPI.js";
import { createMurkup } from "./createMarkup.js";
import { addToFavorite } from "./favoriteHandler.js"


const backdrop = document.querySelector(".add__backdrop")
const form = document.querySelector(".add__modal")

const closeModal = document.querySelector(".add__close")

closeModal.addEventListener("click", () => {
    backdrop.style.display = "none"
})

// const getFormData = async () => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const sportsmanData = {
            name: e.target.elements.name.value,
            surname: e.target.elements.surname.value,
            sport: e.target.elements.sport.value,
            team: e.target.elements.team.value,
            avatar: e.target.elements.avatar.value
        }
    
       await addSportsmanAPI(sportsmanData)
       await getSportsmanAPI().then((data) => {
            createMurkup(data)
            const items = document.querySelectorAll(".list__item")
            addToFavorite(items)
            return data
        })
        backdrop.style.display ="none"
    })
// }

