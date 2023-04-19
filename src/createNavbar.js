import createElement from "./createElement";

const createNavbar = () => {
    const navbar = createElement("div", "navbar");
    const navList = createElement("ul", "navList");
    const navbarOps = ["home", "menu", "about"];

    for (let item of navbarOps) {
        let navItem = createElement("li", "nav-" + item);
        navItem.classList.add("navButton");
        navItem.innerText = item.toUpperCase();
        navList.appendChild(navItem);
    }

    navbar.appendChild(navList);
    return navbar;
};

export default createNavbar;
