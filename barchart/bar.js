"use strict";

window.addEventListener("DOMContentLoaded", init);
let dataArray = [];
let mydiv = document.querySelector(".bar");
function init() {
  buildDataArray();

  //run the loop smoothly on every animation iteration
  //   document.querySelector("#bars").addEventListener("animationiteration", loop);
  setTimeout(loop, 200);
}

function loop() {
  // add new data
  dataArray.push(getNewData());

  // scroll data
  dataArray.shift();

  //   display data
  displayDataArray();
  console.log(dataArray);
  setTimeout(loop, 200);
}

function buildDataArray() {
  for (let i = 0; i < 40; i++) {
    dataArray.push(getNewData());
  }
}

function getNewData() {
  let x = Math.floor(Math.random() * 100 + 1);
  return x;
}

function displayDataArray() {
  let bars = document.querySelectorAll(".bar");

  bars.forEach(displayDataBar);
  console.log("works!!");
}

function displayDataBar(item, index) {
  item.style.height = dataArray[index] + "px";
}
