"use strict";

import { displayDetails } from "./ui.js";

export async function getDetails(cardId) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "97bd08870emsh2ec4c5c65935a01p1fa653jsnc16d53e2abcf",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    let apiDetails = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${cardId}`,
      options
    );
    let responseDetails = await apiDetails.json();
    console.log(apiDetails);
    console.log(responseDetails);

    displayDetails(responseDetails);
  } catch (error) {
    console.error(error);
  }
}
