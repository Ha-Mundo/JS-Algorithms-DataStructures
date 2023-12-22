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

    delete(key) {
        const index = this.hash(key);
    
        if (this.keyMap[index]) {
          for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
              return [].concat(...this.keyMap[index].splice(i, 1));
            }
          }
        }
    
        return null;
    }

    keys() {
        const keys = [];
    
        for (const bucket of this.keyMap) {
          if (bucket) {
            for (const item of bucket) {
              keys.push(item[0]);
            }
          }
        }
    
        return keys;
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

    print() {
        for (let i = 0; i < this.keyMap.length; i++) {
          if (this.keyMap[i]) {
            for (const item of this.keyMap[i]) {
              console.log(`bucket ${i}: ${item}`);
            }
          }
        }
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
console.log(hashTable.values()); // [ '#DDA0DD','#FA8072','#800000','#FFFF00','#EE7F74','#808000','#F08080','#C71585' ]
console.log(hashTable.keys()); // [ 'plum','salmon','maroon','yellow','coral','olive','lightcoral','lightcoral','mediumvioletred' ]
console.log(hashTable.delete('lightcoral')); // [ 'lightcoral', '#F08080' ]
hashTable.print();/*'bucket 0: plum,#DDA0DD' 
                    'bucket 3: salmon,#FA8072' 
                    'bucket 8: maroon,#800000' 
                    'bucket 8: yellow,#FFFF00' 
                    'bucket 9: coral,#EE7F74' 
                    'bucket 10: olive,#808000' 
                    'bucket 13: lightcoral,#EE7F74' 
                    'bucket 16: mediumvioletred,#C71585'
                    */