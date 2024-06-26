"use strict";

import { displayAllData } from "./ui.js";

export async function getData(category = "mmorpg") {
  //mmorpg is defualt
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "97bd08870emsh2ec4c5c65935a01p1fa653jsnc16d53e2abcf",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let response = await api.json();
    //   console.log(api);
    //   console.log(response);
    displayAllData(response);
  } catch (error) {
    console.error(error);
  }
}


