/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    // initialize capacity
    this.map={}
    this.list=new DoublyLinkedList()
    this.capacity=capacity
    this.size=0
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // if key doesn't exist, return -1
    if(!this.map[key]) return -1


    // if key exists, return
    // move to front of linked List
    // return value
    const node = this.map[key]
    this.list.move2front(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // key exists, update value
    // => update value, move to front
    if (this.map[key]) {
        const node = this.map[key]
        node.value=value
        this.list.move2front(node)
        return
    }


    // key doesn't exist
    // if full => remove last node from LL and HM
    // dec the size
    if (this.size===this.capacity) {
        const lastNode = this.list.removeLast()
        delete this.map[lastNode.key]
        this.size--;
    }

    // add to LL
    // save to hash map
    // inc size
    const newNode = new ListNode(key, value)
    this.list.add(newNode)

    this.map[key] = newNode
    this.size++
};

class DoublyLinkedList {
    constructor() {
        this.head = new ListNode()
        this.tail = new ListNode()
        this.connect(this.head, this.tail)
    }

   
    add(node){
        this.connect(node,this.head.next)
        this.connect(this.head,node)
    }

    // needs to remove the node it deletes
    removeLast() {
        const lastNode = this.tail.prev
        this.delete(lastNode)
        return lastNode
    }

    move2front(node) {
        this.delete(node)
        this.add(node)

    }

    connect(node1, node2) {
        node1.next=node2
        node2.prev=node1

    }

    delete(node) {
        this.connect(node.prev, node.next)
    }
}

class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */