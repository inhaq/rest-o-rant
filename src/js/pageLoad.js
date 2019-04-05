export default function pageLoad() {

    // structure
    const bgImg = document.createElement('div');
    const darkOverlay = document.createElement('div');
    const menu = document.createElement('div');
    const container = document.createElement('div');
    const menuInner = document.createElement('div');
    const sectionHead = document.createElement('div');

    bgImg.className = 'section-img bg-img';
    darkOverlay.className = 'dark-overlay';
    menu.className = 'menu padding80';
    container.className = 'container';
    menuInner.className = 'menu-inner row no-margin';
    sectionHead.className = 'section-head text-center';

    bgImg.appendChild(darkOverlay);
    darkOverlay.appendChild(menu);
    menu.appendChild(container);
    container.appendChild(menuInner);
    menuInner.appendChild(sectionHead);

    // header
    const h3 = document.createElement('h3');
    h3.className = 'intro-title main-tit niconne';
    h3.textContent = 'Our Rest-o-rant Menu';

    const separator = document.createElement('div');
    separator.className = 'separator';

    sectionHead.appendChild(h3);
    sectionHead.appendChild(separator);

    // nav
    const realStuff = document.createElement('div');
    realStuff.className = 'real-stuff';
    const ul = document.createElement('ul');
    ul.className = 'nav nav-tabs';

    const li = `<li class="active">
                  <a href="#starters" aria-controls="starters">Starters</a>
                </li>
                <li>
                  <a href="#soup-items" aria-controls="soup-items">Soup Items</a>
                </li>
                <li>
                  <a href="#lunch" aria-controls="lunch">Lunch</a>
                </li>
                <li>
                  <a href="#dessert" aria-controls="dessert">Desserts</a>
                </li>`;

    menuInner.appendChild(realStuff);
    realStuff.appendChild(ul);
    ul.innerHTML = li;

    // tabs
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content padding30';
    realStuff.appendChild(tabContent);

    return bgImg;
}