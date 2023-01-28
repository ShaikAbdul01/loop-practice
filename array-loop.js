//number
var items = [23, 45, 324, 56, 345, 57, 79, 34, 656, 68];
for (var i = 0; i <= 7; i++) {
  var item = items[i];
  console.log(item);
}
console.log("------------------");
//numbers and length
var numbers = [34, 57, 86, 343, 46, 446];
for (i = 0; i <= numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
}
//vowel and string
console.log("------------------");

var charItems=['a', 'e','i', 'o', 'u'];
for(i=0;i<=charItems.length;i++){
    var charItem=charItems[i]
    console.log(charItem);
}

//even
console.log("------------------");

numbers = [34, 57, 86, 343, 46, 446];
for (i = 0; i <= numbers.length; i+=2) {
  var number = numbers[i];
  console.log(number);
}

//odd
console.log("------------------");

numbers = [34, 57, 86, 343, 46, 446];
for (i = 1; i <= numbers.length; i+=2) {
  var number = numbers[i];
  console.log(number);
}