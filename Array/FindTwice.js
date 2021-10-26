   
let numbers = new Array();
let repeated_values = new Array();
for (var i = 1; i <= 100; i++) {
    numbers.push(i);
}
console.log("Numbers in Range 1 to 100 :",numbers);
numbers.forEach((values) => {
  let temp1 = values % 10;
  let temp2 = Math.trunc(values / 10);
  if (temp1 == temp2)
      repeated_values.push(values);
});
  console.log("Twice Values Are:",repeated_values);
