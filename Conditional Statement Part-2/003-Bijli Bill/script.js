let unit = Number(prompt("Enter your total unit"));
console.log(unit);
let amt = 0;
let total = 0;

//Price
//upto 100 unit- 4.2/unit
//101-200 unit- 6/unit
//201-400 unit- 8/unit
//more than 400 unit- 13/unit


//First Approch

// if (unit > 400) {
//   amt = (unit - 400) * 13;
//   unit = 400;
//   total = total + amt;
//   amt = (unit - 200) * 8;
//   unit = 200;
//   total = total + amt;
//   amt = (unit - 100) * 6;
//   unit = 100;
//   total = total + amt;
//   amt = 100 * 4;
//   total = total + amt;
//   console.log(total);
// }
// else if (unit > 200 && unit <= 400) {
//   amt = (unit - 200) * 8;
//   unit = 200;
//   total = total + amt;
//   amt = (unit - 100) * 6;
//   unit = 100;
//   total = total + amt;
//   amt = 100 * 4;
//   total = total + amt;
//   console.log(total);
// }

// else if (unit > 100 && unit <= 200) {
//   amt = (unit - 100) * 6;
//   unit = 100;
//   total = total + amt;
//   amt = 100 * 4;
//   total = total + amt;
//   console.log(total);
// }
// else if (unit <= 100 && unit >= 0) {
//   amt = unit * 4;
//   console.log(amt);
// }

//Sheri Approch

if(unit>400)
{
    amt=(unit-400)*13;
    unit=400;
}
if(unit>200)
{
    amt+=(unit-200)*8;
    unit=200;
}
if(unit>100)
{
    amt+=(unit-100)*6;
    unit=100;
}
    amt+=unit*4;
    

console.log(amt);
