console.log("Welcome to the Array Javascript problem ")

let random = new Array();
let sortedArray=new Array();
for (let i = 0; i < 10; i++) 
{
    random[i] = Math.floor(Math.random() * 899) + 100;
}
sortedArray=random.sort();
console.log(sortedArray);
var maximum=Math.max.apply(null, random);
var minimum=Math.min.apply(null, random);
random.splice(random.indexOf(maximum), 1);
random.splice(random.indexOf(minimum), 1);
console.log("The second_Largest Number  is " + Math.max.apply(null, random));
console.log("The second_Smallest Number is " + Math.min.apply(null, random));