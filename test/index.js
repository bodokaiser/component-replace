var assert  = require('assert');
var replace = require('replace');

describe('replace(parent, child)', function() {

  beforeEach(function() {
    this.parent = document.createElement('div');
    this.child = document.createElement('form');
  });

  it('should replace parent child with child', function() {
    this.parent.appendChild(document.createElement('p'));

    replace(this.parent, this.child);

    assert(this.parent.firstElementChild === this.child);
    assert(this.parent.children.length === 1);
  });

  it('should replace parent children with child', function() {
    this.parent.appendChild(document.createElement('p'));
    this.parent.appendChild(document.createElement('form'));
    this.parent.appendChild(document.createElement('form'));

    replace(this.parent, this.child);

    assert(this.parent.firstElementChild === this.child);
    assert(this.parent.children.length === 1);
  });

});

describe('replace(selector, scope, child)', function() {

  before(function() {
    this.scope = document.createElement('div');
    this.scope.innerHTML = '<div id="inner"><p></p></div>';
  });

  it('should replace scoped selector child with child', function() {
    replace('#inner', this.scope, document.createElement('input'));

    var inner = this.scope.querySelector('#inner');

    assert(inner.firstElementChild.tagName.toLowerCase() === 'input');
    assert(inner.children.length === 1);
  });

});

describe('replace(selector, child)', function() {

  before(function() {
    this.content = document.createElement('div');
    this.content.innerHTML += '<div id="one"><p></p></div>';
    this.content.innerHTML += '<div id="two"><hr><p></p></div>';

    document.body.appendChild(this.content);
  });

  it('should replace selector child with child', function() {
    replace('#one', document.createElement('a'));

    var one = document.body.querySelector('#one');

    assert(one.firstElementChild.tagName.toLowerCase() === 'a');
    assert(one.children.length === 1);
  });

  it('should replace selector children with child', function() {
    replace('#two', document.createElement('h1'));

    var two = document.body.querySelector('#two');

    assert(two.firstElementChild.tagName.toLowerCase() === 'h1');
    assert(two.children.length === 1);
  });

});
