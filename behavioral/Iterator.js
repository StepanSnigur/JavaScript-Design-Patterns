class Iterator {
    constructor(arr) {
        this.arr = arr;
        this.index = 0;
    }

    next () {
        return this.arr[this.index++];
    }
    hasNext () {
        return this.index < this.arr.length;
    }
}

let arrIterator = new Iterator([1, 5, 7, 'hello', 234, 0]);

while (arrIterator.hasNext()) {
    console.log(arrIterator.next());
}