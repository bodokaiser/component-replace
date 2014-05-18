var query = require('query');

function replace(parent, scope, child) {
  if (arguments.length === 2) {
    child = scope;
    scope = document;
  }
  if (typeof parent === 'string') {
    parent = query(parent, scope);
  }

  while (parent.lastElementChild) {
    parent.lastElementChild.remove();
  }

  parent.appendChild(child);

  return child;
}

module.exports = replace;
