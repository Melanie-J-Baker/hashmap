function Node(obj, next) {
  return {
    obj,
    next,
  };
}

class HashMap {
  hashMap = Array.from({ length: 16 }, () => Node());
  dataLength = 0;
  LOAD_FACTOR = 0.75;

  doubleBuckets() {
    this.dataLength = 0;
    this.dataLength++;
    const OLD_LENGTH = this.hashMap.length;
    let oldHashMap = this.entries();
    console.log(oldHashMap);
    this.hashMap = [];
    for (let n = 0; n < OLD_LENGTH * 2; n++) this.hashMap.push(Node());
    for (let node of oldHashMap) this.set(node[0], node[1]);
  }

  hash(key) {
    let hashCode = 0;

    const PRIME_NUMBER = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (PRIME_NUMBER * hashCode + key.charCodeAt(i)) % this.hashMap.length;
    }
    return hashCode;
  }

  set(key, value) {
    const HASHED_KEY = this.hash(key);
    let oldNode = this.hashMap[HASHED_KEY].next;
    while (oldNode) {
      if (oldNode.obj[key]) {
        oldNode.obj[key] = value;
        return;
      }
      oldNode = oldNode.next;
    }
    this.dataLength++;
    if (this.dataLength > this.hashMap.length * this.LOAD_FACTOR)
      this.doubleBuckets();
    const obj = {};
    obj[key] = value;
    const node = Node(obj, this.hashMap[HASHED_KEY].next);
    this.hashMap[HASHED_KEY].next = node;
  }

  getHashMap() {
    return this.hashMap;
  }

  get(key) {
    const HASHED_KEY = this.hash(key);
    let node = this.hashMap[HASHED_KEY].next;
    while (node) {
      if (node.obj[key] !== undefined) return node.obj[key];
      node = node.next;
    }
    return null;
  }

  entries() {
    let allEntries = [];
    for (let bucket of this.hashMap) {
      let node = bucket.next;
      while (node) {
        allEntries.push([...Object.keys(node.obj), ...Object.value(node.obj)]);
        node = node.next;
      }
    }
    return allEntries;
  }

  has(key) {
    const HASHED_KEY = this.hash(key);
    let node = this.hashMap[HASHED_KEY].next;
    while (node) {
      if (node.obj[key] !== undefined) return true;
      node = node.next;
    }
    return false;
  }

  remove(key) {
    const HASHED_KEY = this.hash(key);
    let node = this.hashMap[HASHED_KEY];
    while (node.next) {
      if (node.next.obj[key]) {
        node.next = node.next.next;
        this.dataLength--;
        return true;
      }
      node = node.next;
    }
    return false;
  }

  length() {
    return this.dataLength;
  }

  clear() {
    this.hashMap = [];
    this.dataLength = 0;
    this.hashMap = Array.from({ length: 16 }, () => Node());
  }

  keys() {
    let allKeys = [];
    for (let bucket of this.hashMap) {
      let node = bucket.next;
      while (node) {
        allKeys.push(...Object.keys(node.obj));
        node = node.next;
      }
    }
    return allKeys;
  }

  values() {
    let allValues = [];
    for (let bucket of this.hashMap) {
      let node = bucket.next;
      while (node) {
        allValues.push(...Object.values(node.obj));
        node = node.next;
      }
    }
    return allValues;
  }
}

export default HashMap;
