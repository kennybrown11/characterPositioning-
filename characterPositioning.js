function countLetters(string) {
  var str = string.split(' ').join('').toLowerCase();
  var letters = {}
 
  for (let i = 0; i < str.length; i++) {
    if (!letters[str.charAt(i)]){
      letters[str.charAt(i)] = [i];
    } else {
      letters[str.charAt(i)].push(i);
    }
  }
  return letters;
}
 
 console.log(countLetters("lighthosue is in the house"));