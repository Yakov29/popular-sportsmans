import { getSportsmanAPI } from "./getSportmanAPI.js";
export const addToFavoriteAPI = async (sportsmanData) => {
  try {
    const response = await fetch(
      `https://669a78899ba098ed61ffc5a3.mockapi.io/favorites`, 
      {
        method: "POST",
        body: JSON.stringify(sportsmanData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    getSportsmanAPI().then((data) => {
      console.log(data);
    });

  } catch (error) {
    console.error( error);
  }
};
