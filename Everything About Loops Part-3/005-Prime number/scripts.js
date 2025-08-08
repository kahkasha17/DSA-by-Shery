let pr = prompt("Enter any no ");
if (pr === null) {
  console.log("Program cancelled by the user");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {


    //   let temp = true;
    //   for (let i = 2; i <= Math.floor(n / 2); i++) {
    //     if (n % i === 0) {
    //       temp = false;
    //       break;
    //     } else {
    //       temp = true;
    //     }
    //   }
    //   if (temp === true) {
    //     console.log(`${n} is Prime No`);
    //   } else {
    //     console.log(`${n} is not a Prime No`);
    //   }

    console.log(isPrime(n));
    


    } else {
      console.log("No should be positive or more than zero");
    }
  }
}

function isPrime(n)
{
    if(n<=1) return `${n} is not a Prime no`;
    if(n==2) return `${n} is  Prime no`;
    if(n%2==0) return  `${n} is not a Prime no`;
    for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
        if(n%i===0)return `${n} is not Prime no`
    }
    return `${n} is a Prime no`;
}
