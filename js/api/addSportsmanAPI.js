const url = "https://669a78899ba098ed61ffc5a3.mockapi.io/sportsmans";

export const addSportsmanAPI = async (data) => {
  const options = {
    method: "POST",

    body: JSON.stringify(data),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  console.log(data);
  await fetch(url, options).then((data) => {
    return data.json();
  });
};
