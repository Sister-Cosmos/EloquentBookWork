//A vector Type

class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  console.log(new Vec(3, 4).length);



//Groups

class GrouP {
    #members = [];
  
    add(value) {
      if (!this.has(value)) {
        this.#members.push(value);
      }
    }
    delete(value) {
      this.#members = this.#members.filter(v => v !== value);
    }
    has(value) {
      return this.#members.includes(value);
    } 
    static from(collection) {
      let grouP = new GrouP;
      for (let value of collection) {
        grouP.add(value);
      }
      return grouP;
    }
  }
  let grouP = GrouP.from([10, 20]);
  console.log(grouP.has(10));
  console.log(grouP.has(30));
  grouP.add(10);
  grouP.delete(10);
  console.log(grouP.has(10));



//iterable groups

class Group {
    #members = [];

    add(value) {
      if (!this.has(value)) {
        this.#members.push(value);
      }
    }
    delete(value) {
      this.#members = this.#members.filter(v => v !== value);
    }
    has(value) {
      return this.#members.includes(value);
    }
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
    [Symbol.iterator]() {
      return new GroupIterator(this.#members);
    }
  }
  class GroupIterator {
    #members;
    #position;

    constructor(members) {
      this.#members = members;
      this.#position = 0;
    }
    next() {
      if (this.#position >= this.#members.length) {
        return {done: true};
      } else {
        let result = {value: this.#members[this.#position],
                      done: false};
        this.#position++;
        return result;
      }
    }
  }
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }


//Borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));