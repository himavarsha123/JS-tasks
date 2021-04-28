// returns the middle character of the word
// If the word's length is odd, returns the middle character. 
// If the word's length is even, returns the middle 2 characters.
function getMiddle(string) {
    var length = string.length;
    if(length % 2 == 1) {
        var midIndex = Math.floor(length / 2);
        return string.charAt(midIndex);
    } else {
        var firstMidIndex = Math.floor(length / 2) - 1;
        return string.substring(firstMidIndex, firstMidIndex + 2);
    }
}
