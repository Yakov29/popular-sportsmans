import "./getFormData.js"
import "./openAddModal.js"
import "./handlerDeleteModal.js"

import { getSportsmanAPI } from "./api/getSportmanAPI.js";
import { createMurkup } from "./createMarkup.js";
import { addToFavorite } from "./favoriteHandler.js";

getSportsmanAPI().then((data) => {
    console.log(data)
    createMurkup(data)
    const items = document.querySelectorAll(".list__item")
    addToFavorite(items)
    return data
})


