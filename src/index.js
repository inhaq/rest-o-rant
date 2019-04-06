import starter from "./js/start";
import pageLoad from "./js/pageLoad";
import desserts from "./js/desserts";
import lunch from "./js/lunch";
import soup from "./js/soup";

const content = document.getElementById('content');
content.appendChild(pageLoad());
const deepPageLoadElem = document.querySelector('.tab-content');
deepPageLoadElem.appendChild(starter());
deepPageLoadElem.appendChild(soup());
deepPageLoadElem.appendChild(lunch());
deepPageLoadElem.appendChild(desserts());

const navbar = document.querySelector('.nav');

const li = document.querySelectorAll('li');
let liElem = Array.from(li);

const tabPane = document.querySelectorAll('.tab-pane');
let tabPaneElem = Array.from(tabPane);

navbar.addEventListener('click', function (e) {

    const starterElem = document.getElementById('starters');
    const soupElem = document.getElementById('soups');
    const lunchElem = document.getElementById('lunch');
    const dessertElem = document.getElementById('dessert');

    if (!e.target.parentNode.classList.contains('active') && e.target.parentNode.tagName === 'LI') {
        liElem.forEach((a) => {
            a.classList.remove('active');
        });
        tabPaneElem.forEach((a) => {
            a.classList.remove('fade','in', 'active');
        });
    }

    if (e.target.textContent === 'Starters') {
        starterElem.classList.add('fade','in', 'active');
    }

    if (e.target.textContent === 'Soup Items') {
        soupElem.classList.add('fade','in', 'active');
    }

    if (e.target.textContent === 'Lunch') {
        lunchElem.classList.add('in', 'active');
    }

    if (e.target.textContent === 'Desserts') {
        dessertElem.classList.add('in', 'active');
    }
    e.target.parentNode.classList.add('active')

});

