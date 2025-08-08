let pr = prompt("Enter any no ");
if (pr === null) {
  console.log("Program cancelled by the user");
} else {
  let n = Number(pr);
  console.log(n);
  
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
        let sum=0;
        while(n > 0)
        {
            sum+=n%10;
            n=Math.floor(n/10);

        }
        console.log(sum);
        


    } else {
      console.log("No should be positive or more than zero");
    }
  }
}
