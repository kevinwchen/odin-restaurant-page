import createElement from "./createElement";

const createHome = () => {
    const main = createElement("div", "main");

    const home = createElement("div", "home");

    const homeHead = createElement("div", "homeHead");
    homeHead.innerText = "BBQ CITY";
    home.append(homeHead);

    const homeSubHead = createElement("div", "homeSubHead");
    homeSubHead.innerText =
        '"for the freshest cuts with smokey, sweet, and tangy flavours..."';
    home.append(homeSubHead);

    main.append(home);
    return main;
};

export default createHome;
