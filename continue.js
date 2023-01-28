var numbers = [34, 57, 86, 343, 46, 446];
for (i = 0; i <= numbers.length; i++) {
  var number = numbers[i];
  if(number >= 60){
    continue;
  }
  console.log(number);
}