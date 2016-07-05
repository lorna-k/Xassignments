function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
    }
    var average = sum / numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 50 ) {
        return 'F';
    } else if(grade > 50 && grade < 60) {
        return 'D';
    }
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade >= 80 && grade < 90) {
        return 'B';
    }
    else if(grade >= 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num > 1) {
        return num + " " + noun + "s";
    } else
        return num + " " + noun ;
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestLength = 0;
    for (var i = 0; i < splitSentence.length; i++) {
        //currLongestLength = splitSentence[i].length; 
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function isPalindrome(word){
    var reverse = "";
    for( var i = word.length-1; i >= 0; i-- ){
        reverse += word[i];
    }
    if(word === reverse){
        return true;
    }
    else 
        return false;

}

function palindrome(word) {

     if (isPalindrome(word))
         return 'yes';
     else 
          return 'no';
}

function letterCounter(phrase, letter) {
    var currCount = 0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter)
            currCount++;
    }
    return currCount;
}

function longestPalindrome(sentence)
 {
    var longest = longestWord(sentence);
     if (palindrome(longest)== "yes") 
     {
         return longest + " is a palindrome";
     }
     else 
     {
         return longest + " is not a palindrome";
     }
}

function areAnagrams (sentence1, sentence2) {
    var word1 = sentence1.toLowerCase().split("").sort().join("").trim();
    var word2 = sentence2.toLowerCase().split("").sort().join("").trim();

     if (word1 === word2)
         return 'yes'
     else
         return 'no'
}
