import { addToFavoriteAPI } from "./api/addToFavoriteAPI.js";


export const addToFavorite = (addItems) => {

  addItems.forEach((addItem) => {
    addItem.addEventListener("click", async (e) => {
      if (e.target.nodeName === "BUTTON") {
        console.log("click");
        const parent = e.currentTarget;
        const sportsmanData = {
          name: parent.dataset.name,
          surname: parent.dataset.surname,
          sport: parent.dataset.sport,
          team: parent.dataset.team,
          avatar: parent.dataset.avatar,
        };

        console.log(sportsmanData);
        addToFavoriteAPI(sportsmanData)

      }
    });
  });
};

