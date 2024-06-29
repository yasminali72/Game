"use strict";

export class UI {
  static displayData(element) {
    $("#cards").append(`
      <div class="col-md-6 col-lg-4 col-xl-3" id="${element.id}">
        <div class="card h-100" role="button">
          <img src="${element.thumbnail}" class="card-img-top p-3" alt="...">
          <div class="card-body">
            <div class="card-title d-flex justify-content-between align-items-center">
              <p class="mb-2">${element.title}</p class="m-0">
              <span class="hint p-1 rounded text-capitalize">free</span>
            </div>
            <p class="card-text text-center opacity-50">${element.short_description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span class="p-1 rounded">${element.genre}</span>
            <span class="p-1 rounded">${element.platform}</span>
          </div>
        </div>
      </div>
    `);
  }

  static displayAllData(response) {
    $("#layer").hide();
    $("#cards").empty(); // Clear previous content
    response.forEach((element) => {
      UI.displayData(element);
      UI.removeLoading();
    });
  }

  static displayDetails(responseDetails) {
    UI.removeLoading();
    $(".layer .row").removeClass("d-none");
    $(".layer img").attr("src", responseDetails.thumbnail);
    $("h3").html(`title: ${responseDetails.title}`);
    $(".Category").html(responseDetails.genre);
    $(".Platform").html(responseDetails.platform);
    $(".Status").html(responseDetails.status);
    $(".des").html(responseDetails.description);
    $(".layer a").attr("href", responseDetails.game_url);
    $(".layer i").click(function () {
      $("#layer").hide();
      $("#home").show();
      $("header").show();
    });
  }

  static removeLoading() {
    $(".loading").removeClass("d-flex");
    $(".loading").hide();
  }

  static addLoading() {
    $(".loading").addClass("d-flex");
    $(".loading").show();
  }
}
