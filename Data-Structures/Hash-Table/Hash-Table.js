class HashTable {
    constructor (size = 53) {
        this.keyMap = new Array(size);
      }
    
    hash(key) {
    let hash = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        hash = (hash * WEIRD_PRIME + value) % this.keyMap.length;
        }

    return hash;
    }
    

    set(key, value) {
        let index = this.hash(key);
        console.log(index);
        if (!this.keyMap[index]) {
          this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
      }

}

const hashtable = new Hashtable(17);

hashtable.set('maroon', '#800000');
hashtable.set('yellow', '#FFFF00');
hashtable.set('olive', '#808000');
hashtable.set('salmon', '#FA8072');
hashtable.set('lightcoral', '#F08080');
hashtable.set('mediumvioletred', '#C71585');
hashtable.set('plum', '#DDA0DD');
hashtable.set('lightcoral', '#EE7F74');
hashtable.set('coral', '#EE7F74');