// business logic
var countVowels = function(str) {
  var stringArray = str.split("");
  var numberOfVowels=0;

  stringArray.forEach(function(letter) {
    if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"||letter=="A"||letter=="E"||letter=="I"||letter=="O"||letter=="U") {
      numberOfVowels+=1;
      console.log(numberOfVowels);
    }
  });
  return numberOfVowels;
};

// user interface logic
$(document).ready(function() {
  $("form#vowel-counter").submit(function(event) {
    event.preventDefault();

    var userVowels = $("input#count-vowels").val();
    console.log(userVowels);
    var result = countVowels(userVowels);
    console.log(result);


      $("#results").text(result);

    });
  });
