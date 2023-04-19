import createElement from "./createElement";

const createAbout = () => {
    const main = createElement("div", "main");
    const about = createElement("div", "about");

    const aboutHead = createElement("div", "about-head");
    aboutHead.innerText = "ABOUT";
    about.appendChild(aboutHead);


    

    main.append(about);
    return main;
};

export default createAbout;
