// FONCTION : CREATION D'ELEMENTS BALISES DANS LE DOM
// FACTORY METHOD APPLIQUEE AUX ELEMENTS : type + attributs + hiérarchie
const elmtFactory = (type, attribute, ...children) => {
  let elmt = document.createElement(type);

  for (key in attribute) {
    elmt.setAttribute(key, attribute[key]);
    // GESTION DES TYPES DE MEDIA
    // --------- pas d'erreur console ---------- //
    // --------- ne fonctionne pas ---------- //

    if (key === 'video') {
      attribute = { src: '/images/videos/' + `${media.video}` };
    }
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      elmt.appendChild(document.createTextNode(child));
    } else {
      elmt.appendChild(child);
    }
  });

  return elmt;
};
