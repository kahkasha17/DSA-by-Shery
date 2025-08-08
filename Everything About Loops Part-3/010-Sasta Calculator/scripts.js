  while (true) {
    let input = prompt(
      "Select input:\n1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide"
    );

    if (input === "1" || input === "2" || input === "3" || input === "4") {
      let num1 = Number(prompt("Enter first number:"));
      let num2 = Number(prompt("Enter second number:"));

      if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid numbers entered. Try again.");
        continue;
      }

      let result;

      switch (input) {
        case "1":
          result = num1 + num2;
          alert(`Result of addition: ${result}`);
          break;
        case "2":
          result = num1 - num2;
          alert(`Result of subtraction: ${result}`);
          break;
        case "3":
          result = num1 * num2;
          alert(`Result of multiplication: ${result}`);
          break;
        case "4":
          if (num2 === 0) {
            alert("Cannot divide by zero.");
            continue;
          }
          result = num1 / num2;
          alert(`Result of division: ${result}`);
          break;
      }

      let cont = prompt("Do you want to continue? (yes/no)");
      if (cont.toLowerCase() !== "yes") {
        alert("Thank you for using the calculator!");
        break;
      }
    } else {
      alert("Invalid input. Please select a valid option.");
    }
  }



