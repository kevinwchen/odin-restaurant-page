import createElement from "./createElement";

const createNavbar = () => {
  const navbar = createElement("div", "navbar");
  const navbarOps = ["home", "menu", "about"];

  for (let item of navbarOps) {
    let navItem = createElement("div", "nav-" + item);
    navItem.innerText = item.toUpperCase();
    navbar.appendChild(navItem);
  }

  return navbar;
};

export default createNavbar;
