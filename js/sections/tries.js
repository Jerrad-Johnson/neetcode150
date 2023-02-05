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

    insert(word){
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

    search(word){
        let head = this.root;
        for (let entry of word){
            if (head[entry]){
                head = head[entry];
            } else {
                return false;
            }
        }
        return true;
    }
}


let x = new Trie();
x.insert(["a", "b"]);
cc(x.search("ab"))
cc(x.search("ccc"))
