"use strict";

import {UI} from './ui.js'



export class Games{

 static async getData(category = "mmorpg") {//mmorpg is defualt
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
      UI.displayAllData(response);
    } catch (error) {
      console.error(error);
   
    }
  }
}



