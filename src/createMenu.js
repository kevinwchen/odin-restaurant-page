import createElement from "./createElement";

const createMenu = () => {
    const main = createElement("div", "main");
    const menu = createElement("div", "menu");

    const menuHead = createElement("div", "menu-head");
    menuHead.innerText = "MENU";
    menu.appendChild(menuHead);

    const menuItemContainer = createElement("div", "menu-item-container");

    const menuItems = ["Pork Belly", "Beef Short Rib", "Ox Tongue"];
    const menuPrices = ["$10/300g", "$27/500g", "$21/300g"];
    for (let i in menuItems) {
        let itemName = menuItems[i].split(" ").join("").toLowerCase();
        let menuItem = createElement("div", itemName);
        menuItem.classList.add("menu-item");

        let menuItemTitle = createElement("div", itemName + "-title");
        menuItemTitle.classList.add("menu-item-title");
        menuItemTitle.innerText = menuItems[i];
        let menuItemPrice = createElement("div", itemName + "-price");
        menuItemPrice.classList.add("menu-item-price");
        menuItemPrice.innerText = menuPrices[i];

        menuItem.append(menuItemTitle);
        menuItem.append(menuItemPrice);
        menuItemContainer.append(menuItem);
    }

    menu.appendChild(menuItemContainer);
    main.append(menu);
    return main;
};

export default createMenu;
