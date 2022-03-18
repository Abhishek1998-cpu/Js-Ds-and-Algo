// Sets is similar to Array
// Sets does not have similar Items and the values is not in a particular order

function mySet() {
  var collection = [];

  // Check the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //   this method will add an element to the set
  this.add = function (element) {
    // Checking that the element is already present in the Array (Collection) or not
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //   this method will remove an element from a set
  //   In the ES6 sets, this remove method is known and replaced by delete property
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //   this method will return the size of the collection
  // size is a property in ES6 sets
  this.size = function () {
    return collection.length;
  };

  // below methods are not in the ES6 sets
  //   this method will return the union of the two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // this function will test that if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

// 18

var X = new mySet();
X.add(25);
X.add(35);
X.add(45);
X.add(55);
X.add(65);
var Y = new mySet();
Y.add(1);
Y.add(2);
Y.add(3);
Y.add(4);
Y.add(5);
// console.log(X.values());
// console.log(X.union(Y).values());
console.log(X.values());
console.log(Y.values());
console.log(X.subset(Y.values()));
