//break
for (var i = 1; i <= 10; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}
console.log('------------------');
//item break
var charItems = ["a", "e", "i", "o", "u"];
for (i = 0; i <= charItems.length; i++) {
  var charItem = charItems[i];
  if (charItem > "o") {
    break;
  }
  console.log(charItem);
}
