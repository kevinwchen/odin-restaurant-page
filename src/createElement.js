const createElement = (type, id) => {
    const element = document.createElement(type);
    element.id = id;
    return element;
};

export default createElement;
