function HashMap() {
  let hashMap = [];
  let length = 0;
  const LOAD_FACTOR = 0.75;

  function hash(key) {
    let hashCode = 0;

    const PRIME_NUMBER = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = PRIME_NUMBER * hashCode + key.charCodeAt(i);
      hashCode = hashCode % hashMap.length;
    }

    return hashCode;
  }
}
