import { getSportsmanAPI } from "./api/getSportmanAPI.js";




const list = document.querySelector(".list");

export const createMurkup = (data) => {
  list.innerHTML = data
    .map((element) => {
      return `<li class="list__item" id="${element.id}" 
            data-name="${element.name}"
            data-surname="${element.surname}"
            data-sport="${element.sport}"
            data-team="${element.team}"
            data-avatar="${element.avatar}">
 
          <img class="item__avatar" src="${element.avatar}" alt="image" />
          <span class="id" name="id">ID: ${element.id}</span>
          <h3 class="item__name" name="name">${element.name}  <span class="item__surname" name="surname">${element.surname}</span></h3>
          <span class="item__sport"><span class="sport__span" name="sport">${element.sport}</span></span>
          <p name="team" class="item__team">${element.team}</p>
          <button class="item__favorite">${element.favorite ? "Улюблене" : "Додати в улюблене"}</button>
        </li>`;
    })
    .join("");
};