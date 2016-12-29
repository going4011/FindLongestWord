function findLongestWord(str) {
    var longestWordLength = 0;
    var eachWord = str.split(" ");
    for (i = 0; i < eachWord.length; i++){
        if (longestWordLength < eachWord[i].length){
            longestWordLength = eachWord[i].length;
        }
    }
  return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");