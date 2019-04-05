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

