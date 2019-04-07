import starter  from "./js/start";
import pageLoad from "./js/pageLoad";
import desserts from "./js/desserts";
import lunch    from "./js/lunch";
import soup     from "./js/soup";

const content = document.getElementById("content");
content.appendChild(pageLoad());
const deepPageLoadElem = document.querySelector(".tab-content");
deepPageLoadElem.appendChild(starter());
deepPageLoadElem.appendChild(soup());
deepPageLoadElem.appendChild(lunch());
deepPageLoadElem.appendChild(desserts());

const navbar = document.querySelector(".nav");

navbar.addEventListener("click", function (e) {
  const liElem = [...document.querySelectorAll("li")];
  const tabPaneElem = [...document.querySelectorAll(".tab-pane")];

  const starterElem = document.getElementById("starters");
  const soupElem = document.getElementById("soups");
  const lunchElem = document.getElementById("lunch");
  const dessertElem = document.getElementById("dessert");

  if (!e.target.parentNode.classList.contains("active") &&
    e.target.parentNode.tagName === "LI"){
    for (const li of liElem) li.classList.remove("active");
    for (const tab of tabPaneElem) tab.classList.remove("active", "in");
  }

  if (e.target.textContent === "Starters"){
    starterElem.classList.add("active", "in", "slide-in-bck-center");
  } else if (e.target.textContent === "Soup Items"){
    soupElem.classList.add("active", "in", "slide-in-bck-center");
  } else if (e.target.textContent === "Lunch"){
    lunchElem.classList.add("active", "in", "slide-in-bck-center");
  } else if (e.target.textContent === "Desserts"){
    dessertElem.classList.add("active", "in", "slide-in-bck-center");
  }
  e.target.parentNode.classList.add("active");
});
