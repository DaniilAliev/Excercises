class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  insert(num) {
    let newNode = new Node(num)
    if (this.key === null) {
      this.key = num;
    } else {
      this.insertNode(this, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        node.insertNode(node.left, newNode)
      }
    } else if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        node.insertNode(node.right, newNode)
      }
    }
  }

  search(num) {
    
    this.searchNode(this, num)
  
  }

  searchNode(node, num) {
    if (node.getKey() === null) {
      return null;
    } else if (node.getKey() > num) {
      node.search(node.getLeft().getKey(), num)
    } else if (node.getKey() < num) {
      node.search(node.getRight().getKey(), num)
    } else {
      return node.getKey();
    }
  } 

  toArray() {
    this.toArrayNode(this, []);
  }

  toArrayNode(node, resultAr) {
    if (node.key === null) {
      return;
    } else {
      resultAr.push(node.key);
      node.toArrayNode(node.key, resultAr);
      return resultAr;
    }
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }
}
const tree = new Node()

tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);


console.log(tree.toArray())