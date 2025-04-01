import { getFavoritesAPI } from "./api/getFavoritesAPI.js";
import { createMarkupFavorites } from "./createMurkupFavorites.js";
import { deleteFavoriteHandler } from "./deleteFavoriteHandler.js";

getFavoritesAPI().then((data) => {
    console.log(data)
    createMarkupFavorites(data)
    deleteFavoriteHandler()
})