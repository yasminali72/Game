"use strict";

import { UI } from "./ui.js";
import { Games } from "./games.js";
import { Details } from "./details.js";

$(".nav-link").click(function (e) {
  $(".nav-link").removeClass("active");
  $(e.target).addClass("active");

  let category = $(e.target).text();
  UI.addLoading();
  Games.getData(category);
});
UI.addLoading()
Games.getData();

$(document).on("click", ".card", function (e) {
  let cardId = $(e.currentTarget).closest(".col-md-6").attr("id");
  $("#home").hide();
  $('header').hide();
  $('#layer').show();
  UI.addLoading();
  Details.getDetails(cardId);
});


