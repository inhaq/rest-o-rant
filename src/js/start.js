export default function starter() {
  // content
  const starter1 = `<div class="food-col col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div class="img-1 food-img bg-img">
                            <p class="price niconne">$5</p>
                          </div>
                        </div>

                        <div class="food-col-1 col-lg-9 col-md-9 col-sm-9 col-xs-12">
                          <div class="food-content">
                            <h3 class="food-tit niconne">Cezar's salad</h3>
                            <p class="food-des">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut enim
                              ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit
                              anim id est laborum.</p>

                          </div>
                        </div>`;

  const starter2 = `<div class="food-col col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div class="img-2 food-img bg-img">
                            <p class="price niconne">$10</p>
                          </div>
                        </div>

                        <div class="food-col-1 col-lg-9 col-md-9 col-sm-9 col-xs-12">
                          <div class="food-content">
                            <h3 class="food-tit niconne">Gravad Lax</h3>
                            <p class="food-des">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut enim
                              ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit
                              anim id est laborum.</p>

                          </div>
                        </div>`;

  const starter3 = `<div class="food-col col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div class="img-3 food-img bg-img">
                            <p class="price niconne">$15</p>
                          </div>
                        </div>

                        <div class="food-col-1 col-lg-9 col-md-9 col-sm-9 col-xs-12">
                          <div class="food-content">
                            <h3 class="food-tit niconne">Aglio e Oglio</h3>
                            <p class="food-des">Lorem ipsum dolor sit amet,
                              consectetur adipisicing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut enim
                              ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit
                              anim id est laborum.</p>

                          </div>
                        </div>`;

  // starter - first column
  const firstTab = document.createElement("div");
  firstTab.className = "tab-pane fade in active";
  firstTab.id = "starters";

  const menuList = document.createElement("div");
  menuList.className = "menu-list row no-margin";

  const menuCol1 = document.createElement("div");
  menuCol1.className = "menu-col col-lg-6 col-md-6 col-sm-6 col-xs-12";

  const menuRow1 = document.createElement("div");
  menuRow1.className = "menu-box row no-margin";
  const menuRow2 = menuRow1.cloneNode(true);
  const menuRow3 = menuRow1.cloneNode(true);

  firstTab.appendChild(menuList);
  menuList.appendChild(menuCol1);

  menuCol1.appendChild(menuRow1);
  menuRow1.innerHTML = starter1;

  menuCol1.appendChild(menuRow2);
  menuRow2.innerHTML = starter2;

  menuCol1.appendChild(menuRow3);
  menuRow3.innerHTML = starter3;

  // second column

  const menuCol2 = document.createElement("div");
  menuCol2.className = "menu-col col-lg-6 col-md-6 col-sm-6 col-xs-12";

  const menuRow4 = document.createElement("div");
  menuRow4.className = "menu-box row no-margin";
  const menuRow5 = menuRow4.cloneNode(true);
  const menuRow6 = menuRow4.cloneNode(true);

  menuCol1.parentNode.insertBefore(menuCol2, menuCol1);

  menuCol2.appendChild(menuRow4);
  menuRow4.innerHTML = starter1;

  menuCol2.appendChild(menuRow5);
  menuRow5.innerHTML = starter2;

  menuCol2.appendChild(menuRow6);
  menuRow6.innerHTML = starter3;

  return firstTab;
}
