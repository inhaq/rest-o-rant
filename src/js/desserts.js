export default function desserts() {
  const dessert1 = `<div class="food-col col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div class="des-1 food-img bg-img">
                            <p class="price niconne">$0</p>
                          </div>
                        </div>

                        <div class="food-col-1 col-lg-9 col-md-9 col-sm-9 col-xs-12">
                          <div class="food-content">
                            <h3 class="food-tit niconne">Baked cabbage</h3>
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

  const dessert2 = `<div class="food-col col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div class="des-2 food-img bg-img">
                            <p class="price niconne">$0</p>
                          </div>
                        </div>

                        <div class="food-col-1 col-lg-9 col-md-9 col-sm-9 col-xs-12">
                          <div class="food-content">
                            <h3 class="food-tit niconne">Baked cabbage</h3>
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

  const dessert3 = `<div class="food-col col-lg-3 col-md-3 col-sm-3 col-xs-12">
                          <div class="des-3 food-img bg-img">
                            <p class="price niconne">$0</p>
                          </div>
                        </div>

                        <div class="food-col-1 col-lg-9 col-md-9 col-sm-9 col-xs-12">
                          <div class="food-content">
                            <h3 class="food-tit niconne">Baked cabbage</h3>
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

  // desserts - first column
  const fourthTab = document.createElement("div");
  fourthTab.className = "tab-pane fade";
  fourthTab.id = "dessert";

  const menuList = document.createElement("div");
  menuList.className = "menu-list row no-margin";

  const menuCol1 = document.createElement("div");
  menuCol1.className = "menu-col col-lg-6 col-md-6 col-sm-6 col-xs-12";

  const menuRow1 = document.createElement("div");
  menuRow1.className = "menu-box row no-margin";
  const menuRow2 = menuRow1.cloneNode(true);
  const menuRow3 = menuRow1.cloneNode(true);

  fourthTab.appendChild(menuList);
  menuList.appendChild(menuCol1);

  menuCol1.appendChild(menuRow1);
  menuRow1.innerHTML = dessert1;

  menuCol1.appendChild(menuRow2);
  menuRow2.innerHTML = dessert2;

  menuCol1.appendChild(menuRow3);
  menuRow3.innerHTML = dessert3;

  // second column

  const menuCol2 = document.createElement("div");
  menuCol2.className = "menu-col col-lg-6 col-md-6 col-sm-6 col-xs-12";

  const menuRow4 = document.createElement("div");
  menuRow4.className = "menu-box row no-margin";
  const menuRow5 = menuRow4.cloneNode(true);
  const menuRow6 = menuRow4.cloneNode(true);

  menuCol1.parentNode.insertBefore(menuCol2, menuCol1);

  menuCol2.appendChild(menuRow4);
  menuRow4.innerHTML = dessert1;

  menuCol2.appendChild(menuRow5);
  menuRow5.innerHTML = dessert2;

  menuCol2.appendChild(menuRow6);
  menuRow6.innerHTML = dessert3;

  return fourthTab;
}
