var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  var newKittens = kittens.unshift(name);
  return newKittens;
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}
function destructivelyRemoveFirstKitten() {
  var newArr = kittens.shift();
  return newArr;
}
function appendKitten(name) {
  moreKittens = kittens.push(name);
  return moreKittens;
}
