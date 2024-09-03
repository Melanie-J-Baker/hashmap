function Node(obj, next) {
  return {
    obj,
    next,
  };
}

function HashMap() {
  let hashMap = [];
  let dataLength = 0;
  const LOAD_FACTOR = 0.75;

  function createBuckets() {
    for (let n = 0; n < 16; n++) hashMap.push(Node());
  }
  createBuckets();

  function doubleBuckets() {
    dataLength = 0;
    dataLength++;
    const OLD_LENGTH = hashMap.length;
    let oldHashMap = entries();
    console.log(oldHashMap);
    hashMap = [];
    for (let n = 0; n < OLD_LENGTH * 2; n++) hashMap.push(Node());
    for (let node of oldHashMap) set(node[0], node[1]);
  }

  function hash(key) {
    let hashCode = 0;

    const PRIME_NUMBER = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = PRIME_NUMBER * hashCode + key.charCodeAt(i);
      hashCode = hashCode % hashMap.length;
    }

    return hashCode;
  }
  function set(key, value) {
    const HASHED_KEY = hash(key);
    let oldNode = hashMap[HASHED_KEY].next;
    while (oldNode) {
      if (oldNode.obj[key]) {
        oldNode.obj[key] = value;
        return;
      }
      oldNode = oldNode.next;
    }
    dataLength++;
    if (dataLength > hashMap.length * LOAD_FACTOR) doubleBuckets();
    const obj = {};
    obj[key] = value;
    const node = Node(obj, hashMap[HASHED_KEY].next);
    hashMap[HASHED_KEY].next = node;
  }
  function entries() {
    let allEntries = [];
    for (let bucket of hashMap) {
      let node = bucket.next;
      while (node) {
        allEntries.push([...Object.keys(node.obj), ...Object.value(node.obj)]);
        node = node.next;
      }
    }
    return allEntries;
  }
  return {
    getHashMap: () => hashMap,
    set,
    entries,
    get: (key) => {
      const HASHED_KEY = hash(key);
      let node = hashMap[HASHED_KEY].next;
      while (node) {
        if (node.obj[key] !== undefined) return node.obj[key];
        node = node.next;
      }
      return null;
    },
    has: (key) => {
      const HASHED_KEY = hash(key);
      let node = hashMap[HASHED_KEY].next;
      while (node) {
        if (node.obj[key] !== undefined) return true;
        node = node.next;
      }
      return false;
    },
    remove: (key) => {
      const HASHED_KEY = hash(key);
      let node = hashMap[HASHED_KEY];
      while (node.next) {
        if (node.next.obj[key]) {
          node.next = node.next.next;
          dataLength--;
          return true;
        }
        node = node.next;
      }
      return false;
    },
    length: () => {
      return dataLength;
    },
    clear: () => {
      hashMap = [];
      dataLength = 0;
      createBuckets();
    },
    keys: () => {
      let allKeys = [];
      for (let bucket of hashMap) {
        let node = bucket.next;
        while (node) {
          allKeys.push(...Object.keys(node.obj));
          node = node.next;
        }
      }
      return allKeys;
    },
    values: () => {
      let allValues = [];
      for (let bucket of hashMap) {
        let node = bucket.next;
        while (node) {
          allValues.push(...Object.values(node.obj));
          node = node.next;
        }
      }
      return allValues;
    },
  };
}
