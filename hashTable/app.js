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

// CHALLENGE 3 

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

// 

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// 

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")


// 

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
  console.log(ht.get(key));
})

