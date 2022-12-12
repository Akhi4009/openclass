 class Node{
    constructor(element){
        this.element=element;
        this.next=null
    }
 }

 class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    add(element){
        let node=new Node(element)
        if(!this.head){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next!=null){
                curr=curr.next
}
curr.next=node
        }
        this.size++
    }

PrintList(){
    let curr=this.head
    let index=0
    while(curr){
        console.log("Element:",curr.element,"index:",index++)
        curr=curr.next
    }
}

    isEmpty(){
      return  this.size?false:true
    }
    sizeOfLL(){
        return this.size
    }


 }

 let list=new LinkedList()
 
 list.add(1)
 list.add(2)
//  list.PrintList()
//   list.isEmpty()
 console.log(list)