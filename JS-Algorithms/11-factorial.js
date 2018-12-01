// write a function which accepts a number and returns the factorial of that number
// (a product of an integer and all the integers below it)
// factorial zero is always 1

function factorial(num) {
   if (num < 0) return 0;
   if (num <= 1) return 1;
   return num * factorial(num - 1);
}

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040