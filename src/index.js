import "./style.css";
import createNavbar from "./navbar";
import createFooter from "./footer";

const main = document.getElementById("content");

const navbar = createNavbar();
const footer = createFooter();
document.body.insertBefore(navbar, main);
document.body.insertBefore(footer, main.nextSibling);
