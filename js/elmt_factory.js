// FONCTION : CREATION D'ELEMENTS BALISES DANS LE DOM
// FACTORY METHOD APPLIQUEE AUX ELEMENTS : type + attributes + nodes
const elmtFactory = (type, attribute, ...children) => {
  let elmt = document.createElement(type);

  for (key in attribute) {
    elmt.setAttribute(key, attribute[key]);
  }

  children.forEach((child) => {
    if (typeof child === 'string')
      elmt.appendChild(document.createTextNode(child));
    else elmt.appendChild(child);
  });

  return elmt;
};
