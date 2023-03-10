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
        if (head.endOfWord === true) return true;
        return false;
    }

    startsWith(fragment){
        let head = this.root;
        for (let entry of fragment){
            if (head[entry]){
                head = head[entry];
            } else {
                return false;
            }
        }
        return true;
    }
}

class WordDictionary{
    constructor() {
        this.dictionary = {};
    }

    addWord(word){
        this.dictionary[word] = 1;
    }

    search(word){
        if (this.dictionary[word]) return true;
        return false;
    }
}


let x = new Trie();
x.insert(["a", "b", "c"]);
//cc(x.search("ab"))
//cc(x.search("ccc"))
//cc(x.startsWith("ad"));


let y = new WordDictionary;
y.addWord(".a.")
cc(y.search(".a"));