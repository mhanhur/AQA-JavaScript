Dictionary = {
    words: {},
    addWord: function (word, entry) {
        this.words[word] = entry
    },
    getEntry: function (word) {
        return this.words[word]
    },
    getAllWords: function () {
        let keys = []
        for(let key in this.words) {
            keys.push(key)
        }
        return keys
    },
    getAllEntries: function () {
        return this.words
    },
}


Dictionary.addWord('JavaScript', 'A high-level, often just-in-time compiled language that conforms to the ECMAScript specification.');
Dictionary.addWord('Dictionary', 'A collection of words and their meanings.');
console.log(Dictionary.getEntry('JavaScript'));
console.log(Dictionary.getAllWords()); // Output: ['JavaScript', 'Dictionary']
console.log(Dictionary.getAllEntries()); // Output: { JavaScript: 'A high-level, often just-in-time compiled language that conforms to the ECMAScript specification.', Dictionary: 'A collection of words and their meanings.' }