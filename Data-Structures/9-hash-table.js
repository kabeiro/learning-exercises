// with collision resolution by separate chaining

class HashTable {
    constructor(size=17) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
    }
    // lets you insert many elements with the same key,
    // but you get only first one inserted
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    
    values(){
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                if(this.keyMap[i]) {
                    for (let j = 0; j < this.keyMap[i].length; j++) {
                        // assures there are no duplicates in the list
                        if(!valuesArr.includes(this.keyMap[i][j][1])) {
                            valuesArr.push(this.keyMap[i][j][1]);
                        }
                    }
                }
            }
        }
        return valuesArr;
    }
    
    keys(){
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                if(this.keyMap[i]) {
                    for (let j = 0; j < this.keyMap[i].length; j++) {
                        // assures there are no duplicates in the list
                        if(!keysArr.includes(this.keyMap[i][j][0])) {
                            keysArr.push(this.keyMap[i][j][0]);
                        }
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();
ht.set("slateblue", "6A5ACD");
ht.set("coral", "FF7F50");
ht.set("turquoise", "40E0D0");
ht.set("lavender", "E6E6FA");
ht.set("sandybrown", "F4A460")