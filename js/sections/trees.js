// based on https://www.youtube.com/watch?v=5cU1ILGy6dM&t=120s
class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Class is broken, it creates null nodes *which have their own children*
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

    isSameTree(tree1, tree2){
        let result = {same: true};
        this.isSameTreeRecursion(tree1, tree2, result);
        return result.same;
    }

    isSameTreeRecursion(tree1, tree2, result){
        if (!tree1 && !tree2) return;
        if ((!tree1 && tree2) || (tree1 && !tree2)) { result.same = false; return; }
        if (tree1.data !== tree2.data){ result.same = false; return; }
        this.isSameTreeRecursion(tree1.left, tree2.left, result);
        this.isSameTreeRecursion(tree1.right, tree2.right, result);
    }

    isSubtree(tree1, tree2){
        let head = {};
        this.findHeadOfValueRecursion(tree1.root, tree2.root.data, head);
        if (!head) return false;
        return this.isSameTree(head.node, tree2.root);
    }

    findHeadOfValueRecursion(tree, value, head){
        if (!tree) return;
        if (tree.data === value){ head.node = tree; return }
        this.findHeadOfValueRecursion(tree.left, value, head);
        this.findHeadOfValueRecursion(tree.right, value, head);
    }

    levelOrder(){
        if (!tree) return [];
        let values = [[this.root.data]]
        let head = this.root;
        this.levelOrderRecursion(values, head);
        return values;
    }

    levelOrderRecursion(values, head){
        if (!head) return;
        let leftValue = getValue(head.left?.data);
        let rightValue = getValue(head.right?.data);

        function getValue(data){
            if (data === 0){
                return 0;
            } else if (data === null || data === undefined) {
                return null;
            } else {
                return data;
            }
        }

        values.push([leftValue, rightValue]);
        this.levelOrderRecursion(values, head.left);
        this.levelOrderRecursion(values, head.right);
    }

    rightSideView(){
        let head = this.root;
        if (!head.data) return [];
        let values = [head.data];

        while (head.right){
            head = head.right;
            values.push(head.data);
        }

        return values;
    }

}

let tree = new BST;
tree.addArr([1,5,2,7,4,1,6,8,32,2,15,5,0]);
//tree.invertTree();
//cc(tree.getDepth());
//cc(tree.getDiameter())
//cc(tree.isBalanced());
//cc(tree);
//cc(tree.levelOrder());
//cc(tree.rightSideView());
//cc(tree);

let tree2 = new BST;
tree2.addArr([1,5,2,7,4,1,6,8,32,2,15,5,0]);
let tree3 = new BST;
//cc(tree3.isSameTree(tree.root, tree2.root));

let tree4 = new BST;
tree4.addArr([9,1,5,2]);
let tree5 = new BST;
tree5.addArr([1,5,2]);



