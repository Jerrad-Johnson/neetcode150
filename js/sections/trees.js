// based on https://www.youtube.com/watch?v=5cU1ILGy6dM&t=120s
class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if (node === null){
            this.root = new Node(data);
            return;
        } else {
            this.searchTree(node, data);
        }
    }

    addArr(arr){
        for (let entry of arr){
            this.add(entry);
        }
    }

    searchTree(node, data){
        if (data < node.data){
            if (node.left === null){
                node.left = new Node(data);
                return;
            } else {
                return this.searchTree(node.left, data);
            }
        } else if (data > node.data){
            if (node.right === null){
                node.right = new Node(data);
                return;
            } else {
                return this.searchTree(node.right, data);
            }
        } else {
            return null;
        }
    }

    invertTree(){
        let root = this.root;
        this.invertRecursion(root);
    }

    invertRecursion(root){
        if (!root) return;
        let tmp = root.left;
        root.left = root.right
        root.right = tmp;
        this.invertRecursion(root.left);
        this.invertRecursion(root.right);
    }

    getDepth(){
        let root = this.root;
        return this.getDepthRecursion(root);
    }

    getDepthRecursion(root){
        if (!root) return 0;
        return 1 + Math.max(this.getDepthRecursion(root.left, root.right));
    }

    getDiameter(){
        let root = this.root;
        let left = this.getDepthSingleSide(root, "left");
        let right = this.getDepthSingleSide(root, "right");
        return left+right;
    }

    getDepthSingleSide(root, side){
        if (!root) return 0;
        if (side === "left") root = root.left;
        if (side === "right") root = root.right
        return 1 + this.getDepthSingleSide(root, side)
    }

    isBalanced(){
        let root = this.root;
        let counterL = 0, counterR = 0;
        let result = {balanced: true};
        counterL = this.isBalancedRecursion(root, result);
        counterR = this.isBalancedRecursion(root, result);
        if (counterL-counterR < 2 || counterR-counterL < 2) result.balanced = false;
        return result.balanced;
    }

    isBalancedRecursion(root, result){
        if (!root) return;
        let counterL = 0, counterR = 0;
        counterL = 1+this.isBalancedRecursion(root.left, result)
        counterR = 1+this.isBalancedRecursion(root.right, result);

        if (counterL-counterR < 2 || counterR-counterL < 2) result.balanced = false;
        return 1;
    }
}

let tree = new BST;
tree.addArr([1,5,2,7,4,1,6,8,32,2,15,5,0]);
tree.invertTree();
//cc(tree.getDepth());
//cc(tree.getDiameter())
cc(tree.isBalanced());

cc(tree);
