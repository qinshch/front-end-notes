class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    show(){
        console.log(this.value);
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        } else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if (node.left === null){
                node.left = newNode;
            }
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right === null)
                node.right = newNode;
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    preOrderTraverse(){
        this.preOrderTraverseNode(this.root);
    }

    preOrderTraverseNode(node){
        if(node !== null){
            node.show();
            preOrderTraverseNode(node.left);
            preOrderTraverseNode(node.right);
        }
    }

    inOrderTraverse(){
        inOrderTraverseNode(this.root);
    }

    inOrderTraverseNode(node){
        if(node !== null){
            this.inOrderTraverseNode(node.left);
            node.show();
            this.inOrderTraverseNode(node.right);
        }
    }

    postOrderTraverse(){
        this.postOrderTraverseNode(this.root);
    }

    postOrderTraverseNode(node){
        if(node !== null){
            postOrderTraverseNode(node.left);
            postOrderTraverseNode(node.right);
            node.show();
        }
    }

    findMinNode(root){
        let node = root;

        while(node.left && node){ //防止node到最后一个null值，必须保证自己和孩子都在
            node = node.left;
        }

        return node;
    }

    finaMaxNode(root){
        let node = root;

        while(node && node.right){
            node = node.right;
        }

        return node;
    }

    find(value){
        return this.findNode(this.root, value);
    }

    findNode(node, value){
        if(node === null){
            return node;
        }
        if(value < node.value){
            return this.findNode(node.lefy, value);
        }else if(value > node.value){
            return this.findNode(node.right, value);
        }else{
            return node;
        }
    }

    remove(value){
        this.removeNode(this.root, value);
    }

    removeNode(node, value){
        if(node === null)
            return node;
        
        if(value < node.value){
            this.left = this.removeNode(node.left, value);
        }else if(value > node.value){
            this.right = this.removeNode(node.right, value);
        }else{ //找到节点

            //第一种情况：没有叶节点
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

            //第二种情况：只有一个子节点。用子节点替换它
            if(node.left === left){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            }

            //第三种情况：用右子树的 最小节点替换。
            let aux = this.findMinNode(node.right);
            node.value = aux.value;
            node.right = this.removeNode(node.right, aux);
            return node;
        }
    }
}