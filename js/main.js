"use strict";

import { addLoading } from "./ui.js";
import { getData } from "./games.js";
import { getDetails } from "./details.js";

//games
$(".nav-link").click(function (e) {
  $(".nav-link").removeClass("active");
  $(e.target).addClass("active");

  let category = $(e.target).text();
  addLoading();
  getData(category);
  // console.log(e);
});
getData();

//details
$(document).on("click", ".card", function (e) {
  let cardId = $(e.currentTarget).closest(".col-md-6").attr("id");
  addLoading();
  $("header").hide();
  $(".games").hide();
  getDetails(cardId);
});
