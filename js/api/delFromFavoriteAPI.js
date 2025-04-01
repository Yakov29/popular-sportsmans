export const delFromFavoriteAPI = async (id) => {
  return await fetch(
    `https://669a78899ba098ed61ffc5a3.mockapi.io/favorites/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((data) => data.json());
};
