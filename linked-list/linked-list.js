//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
export class LinkedList { 
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  } 
 push(value) {
  const node = new Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  }
  else{
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
 }
  pop() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    if (this.tail.prev === null) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return value;
  }
  shift(){
    //delete node from front
    const value=this.head.value
    if(this.head===null){
      return null

    }
    if(this.head.next===null){
      this.head=null
      this.tail=null
    }
    else{
      
      this.head=this.head.next
      this.head.prev=null
    }
    this.length--
    return value
  }
  unshift(value){
    const node=new Node(value)
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    else{
      this.head.prev=node
      node.next=this.head
      this.head=node
    }
    this.length++
  }
  delete(value){
   let current=this.head
    while(current){
      if(current.value===value){
        if(this.head===current && this.tail===current){
          this.head=this.tail=null
        }
        else if(this.head===current){
          this.head=current.next
          this.head.prev=null
        }
        else if(this.tail===current){
          this.tail=current.prev
          this.tail.next=null
        }
        else{
          current.prev.next=current.next
          current.next.prev=current.prev
        }
        this.length--
        break
      }
      current=current.next
    }

  }
  count()
  {
    return this.length
  }



}
