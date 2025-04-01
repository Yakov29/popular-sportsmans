import { delFromFavoriteAPI } from "./api/delFromFavoriteAPI.js";
import { getFavoritesAPI } from "./api/getFavoritesAPI.js";
import { createMarkupFavorites } from "./createMurkupFavorites.js";

export const deleteFavoriteHandler = async () => {
  const deleteItems = document.querySelectorAll(".list__item");
  console.log(deleteItems);
  deleteItems.forEach((element) => {
    element.addEventListener("click", async (e) => {
      const parent = e.currentTarget;
      console.log(parent);
      if (e.target.nodeName === "BUTTON") {
        console.log("click");
        const sportsmanData = {
          id: parent.id,
          name: parent.dataset.name,
          surname: parent.dataset.surname,
          sport: parent.dataset.sport,
          team: parent.dataset.team,
          avatar: parent.dataset.avatar,
        };
        console.log(sportsmanData);
        await delFromFavoriteAPI(sportsmanData.id);
        getFavoritesAPI().then((data) => {
          createMarkupFavorites(data);
          deleteFavoriteHandler()
          return data;
        });
      }
    });
  });
};
