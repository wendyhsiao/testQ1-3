// 實作 Fibonacci number (費式數列)
function fibonacci(position) {
  let num1 = 0, num2 = 1;
  if (position < 1) return 0;

  for (let i = 2; i < position; i++) {
    temp = num1 + num2;
    [num1 , num2] = [num2 , temp]
  }
  return num2
}

// fibonacci(3);