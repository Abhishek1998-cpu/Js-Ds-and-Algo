// has
// values
// add
// remove
// size
// union
// intersection
// difference
// subset

function mySet() {
  var collection = [];

  this.has = function (element) {
    counter = 0;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] == element) {
        counter = counter + 1;
      }
    }
    return counter != 0;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    var elementExistOrNot = this.has(element);
    if (!elementExistOrNot) {
      collection.push(element);
    }
  };

  this.remove = function (element) {
    var elementExistOrNot = this.has(element);
    var elementIndex = 0;
    if (elementExistOrNot) {
      // Removing the element
      for (let i = 0; i < collection.length; i++) {
        if (collection[i] == element) {
          elementIndex = i;
          break;
        }
      }
      collection.splice(elementIndex, 1);
    } else {
      console.log("Sorry the element is not in the set");
    }
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (newSet) {
    for (let i = 0; i < newSet.length; i++) {
      var elementExistOrNot = this.has(newSet[i]);
      if (!elementExistOrNot) {
        collection.push(newSet[i]);
      }
    }
  };

  this.intersection = function (newSet) {
    var intersectionSet = [];
    for (let i = 0; i < newSet.length; i++) {
      var elementExistOrNot = this.has(newSet[i]);
      if (elementExistOrNot) {
        intersectionSet.push(newSet[i]);
      }
    }
    collection = intersectionSet;
  };

  this.difference = function (newSet) {
    var Z = [];
    var Z = collection.filter((x) => !newSet.includes(x));
    collection = Z;
    return collection;
  };

  this.subset = function (newSet) {
    var collectionLength = collection.length;
    for (let i = 0; i < newSet.length; i++) {
      this.add(newSet[i]);
    }
    var collectionLengthOfNewArray = collection.length;
    return collectionLength === collectionLengthOfNewArray;
  };
}

var X = new mySet();
var Y = new mySet();
X.add(11);
X.add(1);
X.add(13);
X.add(21);
X.add(3);
X.add(7);
// X.add(4);
// X.add(5);
Y.add(11);
Y.add(3);
Y.add(7);
Y.add(1);
// Y.add(4);
// Y.add(8);
// Y.add(9);
// Y.add(10);
// console.log(X.values());
// console.log(X.remove(600));
console.log(X.values());
console.log(Y.values());
// X.intersection(Y.values());
// console.log(X.difference(Y.values()));
// console.log(X.values());
// X.union(Y.values());
// console.log(X.values());
console.log(X.subset(Y.values()));
