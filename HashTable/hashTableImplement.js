class HashTable
{
  constructor(size)
  {
    this.data = new Array(size);
  }

  _hash(key)
  {
    let hash = 0; 
    for(let i= 0 ; i < key.length; i++)
    {
      hash = (hash + key.charCodeAt(i) * i ) % this.data.length;
    }

    return hash;
  }

  set(key,value){
    let hash = this._hash(key);

    if(!this.data[hash])
    {
      this.data[hash] = [];
    }

    this.data[hash].push([key,value]);
    return this.data;

  }

  get(key)
  {
    let hash = this._hash(key);
    let currentBox = this.data[hash];
    
    if(currentBox)
    {
      for(let i = 0 ; i < currentBox.length; i++)
      {
        if(currentBox[i][0] === key){
          return currentBox[i][1];
        }
      }
    }

    return undefined;
  }

  keys(){
      let keys = [];

      for(let i = 0 ; i < this.data.length; i++)
      {
        if(this.data[i])
        {
          keys.push(this.data[i][0][0]);
        }
      }

      return keys;
  }
}

const hashTable = new HashTable(50);
hashTable.set('apple', 50);
hashTable.set('pear',17);
hashTable.set('peach', 51);

console.log(hashTable.get('peach'));
hashTable.keys();
