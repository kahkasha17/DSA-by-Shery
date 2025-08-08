let pr = prompt("Enter any no ");
if (pr === null) {
  console.log("Program cancelled by the user");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
        let rev=0;
      while(n>0)
      {
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
      }
      console.log(rev);
      


    } else {
      console.log("No should be positive or more than zero");
    }
  }
}