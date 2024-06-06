const cats = ["Milo", "Otis", "Garfield"];// Write your solution here!
beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function destructivelyAppendCat(name) {
    return cats.push(name);
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function destructivelyPrependCat(name){
    return cats.unshift(name);
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function destructivelyRemoveLastCat() {
    return cats.pop();
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function destructivelyRemoveFirstCat() {
    return cats.shift();
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function appendCat(name) {
    return appendCat = [...cats, name];
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function prependCat(name){
    return prependCat = [name,...cats];
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function removeLastCat() {
    return removeLastCat = cats.slice(0,-1);
  }
  beforeEach(function () {
    cats.length = 0;    
    cats.push('Milo', 'Otis', 'Garfield');
  });
  function removeFirstCat() {
    return removeFirstCat = cats.slice(1);
  }
  
  
  