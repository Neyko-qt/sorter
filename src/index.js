class Sorter {
  constructor() {
    this.array = [];
    this.comparator = function (a, b) {
      return a - b;
    }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var unsortedArray = []
      for (var i = 0; i < indices.length; i++){
          unsortedArray.push(this.array[indices[i]]);
      }

      unsortedArray.sort(this.comparator);
      indices.sort(this.comparator);
      for (var j = 0; j < indices.length; j++){
          this.array[indices[j]] = unsortedArray[j];
      }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;