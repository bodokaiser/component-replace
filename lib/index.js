var query = require('query');

function replace(parent, child) {
  if (typeof parent === 'string') {
    parent = query(parent);
  }

  while (parent.lastElementChild) {
    parent.lastElementChild.remove();
  }

  parent.appendChild(child);

  return child;
}

module.exports = replace;