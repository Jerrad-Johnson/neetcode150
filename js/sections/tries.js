class Node{
    constructor(letter) {
        this.letter = letter;
        this.endOfWord = false;
    }
}

class Trie{
    constructor() {
        this.root = {};
    }

    addWord(word){
        let head = this.root;
        this.recursiveAddWord(word, head, 0);
    }

    recursiveAddWord(word, head, iteration){
        let node = new Node(word[iteration]);

        if (head[word[iteration]] === undefined){
            head[word[iteration]] = node;
            head = head[word[iteration]];
        } else {
            head = head[word[iteration]];
        }

        iteration++;

        if (iteration >= word.length){
            head.endOfWord = true;
            return;
        }

        this.recursiveAddWord(word, head, iteration);
    }
}


let x = new Trie();
x.addWord(["a", "b"]);
cc(x);
