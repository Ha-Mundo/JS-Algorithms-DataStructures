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

        if (!this.keyMap[index]) {
          this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);

        if (this.keyMap[index]) {
            for (const item of this.keyMap[index]) {
                if (item[0] === key) return item[1];
                    
                }
            }

        return undefined;
    }

    values() {
        const values = new Set();
    
        for (const bucket of this.keyMap) {
          if (bucket) {
            for (const item of bucket) {
              values.add(item[1]);
            }
          }
        }
       
        return Array.from(values);
      }

}

const hashTable = new HashTable(17);

hashTable.set('maroon', '#800000');
hashTable.set('yellow', '#FFFF00');
hashTable.set('olive', '#808000');
hashTable.set('salmon', '#FA8072');
hashTable.set('lightcoral', '#F08080');
hashTable.set('mediumvioletred', '#C71585');
hashTable.set('plum', '#DDA0DD');
hashTable.set('lightcoral', '#EE7F74');
hashTable.set('coral', '#EE7F74');

console.log(hashTable.get('plum')); // '#DDA0DD'
console.log(hashTable.values());