class LinkedList{

  constructor(value)
  {
    this.head = {
      value: value,
      next : null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value)
  {
    const newNode = {
      value: value,
      next : null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

prepand(value)
{
  const newNode = {
    value : value,
    next : null,
  };

  newNode.next = this.head;
  this.head = newNode;
  this.length++;
}

insert(index,value)
{  
  if(index >= this.length)
  {  
    return this.append(value);
  }

  const newNode = {
    value : value,
    next:null,
  };
  
  let previousNode = this.traverseToIndex(index);
  newNode.next = previousNode.next;
  previousNode.next = newNode;
  
  this.length++;

}

traverseToIndex(index)
{
  let currentNode = this.head;  
  let count = 0;
  
  while(index !== count)
  {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
}

remove(index)
{
  if(index >= this.length)
  {  
    index = this.length;
  }
  
  let previousNode = this.traverseToIndex(index-1);
  previousNode.next = previousNode.next.next;

  this.length--;

}


printList()
{
  let array =[];
  let currentNode =this.head;

  while(currentNode)
  {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
}

}


const newList = new LinkedList('!!');
newList.append('My name');
newList.append('is');
newList.append('Nice to meet you');
newList.prepand('Everyone');
newList.prepand('Hello');
newList.insert(4,'Kelly');
newList.remove(1);
newList.printList();
