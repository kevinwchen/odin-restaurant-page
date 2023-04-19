import createElement from "./createElement";

const createFooter = () => {
  const footer = createElement("div", "footer");
  const footerText = createElement("div", "footerText");
  footerText.innerText = "Made by Kevin";
  footer.appendChild(footerText);

  return footer;
};

export default createFooter;
