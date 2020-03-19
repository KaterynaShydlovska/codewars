'use strict';

// Chalenge 1

// hashTable

class Hashtable {
  constructor(numOfboxes) {
    this.size = numOfboxes;
    this.element = new Array(this.size);
  }

  hash(key) {
    return key.length % this.size;
  }

  put(key, value) {
    let boxNum = this.hash(key);
    if (this.element[boxNum]) {
      obj = this.element[boxNum];
      if (obj[key]) {
        obj[key] = value;
      } else {
        obj[key] = value;
      }
    } else {
      let newObj = {};
      newObj[key] = value;
      this.element[boxNum] = newObj;
    }
  }

  get(key) {
    const h = this.hash(key);
    if (this.element[h]) {
      if (this.element[h][key]) {
        return this.element[h][key];
      }
    }
    return null;
  }

  contains(key) {
    let possibleKey = this.get(key);
    if (possibleKey) {
      // console.log('here is contans', possibleKey)
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    // console.log('here is remove', key)
    let foundEl = this.hash(key);
    if (this.element[foundEl]) {
      delete (this.element[foundEl][key]);
    }
    return 'deleted';
  }
}


let mh = new Hashtable(15);

mh.put("andrii", 45);
mh.put("kate", 25);
// mh.put("hulk", 5);
console.log(mh.get("andrii"));
console.log(mh.remove("kate", 25));
console.log(mh.get('kate'));
console.log(mh.contains("hulk"));



// Challeng 2

// hash
class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  hash(key) {
    if (typeof (key) === 'string') {
      return key.length % this.size;
    } else {
      return key % this.size;
    }
  }

  put(key, value) {
    let bucketNum = this.hash(key);
    let obj = this.buckets[bucketNum];
    if (obj) {
      obj[key] = value;
    } else {
      let newObj = {};
      newObj[key] = value;
      this.buckets[bucketNum] = newObj;
    }
  }

  get(key) {
    let num = this.hash(key);
    if (this.buckets[num]) {
      if (this.buckets[num][key]) {
        return this.buckets[num][key];
      }
    }
    return "not found"
  }

  delete(key) {
    let num = this.hash(key);
    if (this.buckets[num]) {
      if (this.buckets[num][key]) {
        delete this.buckets[num][key];
      }
    }
  }

}

let table = new HashTable(15);

table.put(25, 'kate');
table.put(29, 'andrii')
table.put(5, 'hulk')

console.log(table.get(25));
console.log(table.get('kjhj'));

