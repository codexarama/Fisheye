// FONCTION TRI PAR...
function filterBy(key, order = 'asc') {
  return function sort(a, b) {
    // pas de tri (propriété ou objet nul)
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let filter = 0;
    if (varA > varB) {
      filter = 1;
    } else if (varA < varB) {
      filter = -1;
    }

    return order === 'desc' ? filter * -1 : filter;
  };
}
