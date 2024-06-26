"use strict";

//game
export function displayData(element) {
  $("#cards")
    .append(`<div class=" col-md-6 col-lg-4 col-xl-3" id='${element.id}'>
      
       <div class="card  h-100" role="button">
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
      </div>`);
}

//details of game
export function displayDetails(responseDetails) {
  removeLoading();
  $("#layer").removeClass("d-none").addClass("d-flex");
  $("#layer img").attr("src", responseDetails.thumbnail);
  $("h3").html(`title: ${responseDetails.title}`);
  $(".Category").html(responseDetails.genre);
  $(".Platform").html(responseDetails.platform);
  $(".Status").html(responseDetails.status);
  $(".des").html(responseDetails.description);
  $("#layer a").attr("href", responseDetails.game_url);
  $("#layer i").click(function () {
    $("#layer").removeClass("d-flex").addClass("d-none");
    $(".games").show();
    $("header").show();
  });
}

//loading
export function removeLoading() {
  // document.querySelector(".loading").classList.replace("d-flex", "d-none");
  $(".loading").removeClass("d-flex").addClass("d-none");
}

export function addLoading() {
  // document.querySelector(".loading").classList.replace("d-none", "d-flex");
  $(".loading").removeClass("d-none").addClass("d-flex");
}
