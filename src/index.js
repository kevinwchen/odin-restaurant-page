import "./style.css";
import createNavbar from "./createNavbar";
import createFooter from "./createFooter";
import createHome from "./createHome";
import createMenu from "./createMenu";
import createAbout from "./createAbout";

const content = document.getElementById("content");

const home = () => {
    content.innerHTML = "";
    content.appendChild(createNavbar());
    content.appendChild(createHome());
    content.appendChild(createFooter());
    activateButtons();
};

const menu = () => {
    content.innerHTML = "";
    content.appendChild(createNavbar());
    content.appendChild(createMenu());
    content.appendChild(createFooter());
    activateButtons();
};
const about = () => {
    content.innerHTML = "";
    content.appendChild(createNavbar());
    content.appendChild(createAbout());
    content.appendChild(createFooter());
    activateButtons();
};

const activateButtons = () => {
    const homeButton = document.getElementById("nav-home");
    const menuButton = document.getElementById("nav-menu");
    const aboutButton = document.getElementById("nav-about");

    homeButton.addEventListener("click", (e) => {
        home();
    });
    menuButton.addEventListener("click", (e) => {
        menu();
    });
    aboutButton.addEventListener("click", (e) => {
        about();
    });
};

home();
