// Function to calculate the nth catalan number
function catalanNumber(n) {
  // Function to calculate binomial coefficient
  function binomialCoefficient(n, k) {
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return Math.round(result);
  }

  const coefficient = binomialCoefficient(2 * n, n);
  const result = coefficient / (n + 1);

  return Math.round(result);
}

// Function to calculate the nth triangular number
function triangularNumber(n) {
  n = parseInt(n);
  return (n * (n + 1)) / 2;
}

// Function to calculate the nth harmonic number
function harmonicNumber(n) {
  n = parseInt(n);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += 1 / i;
  }
  return result;
}

// Function to calculate the nth Fibonacci number
function fibonacciNumber(n) {
  n = parseInt(n);
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Function to calculate the nth Lucas number
function lucasNumber(n) {
  n = parseInt(n);
  if (n === 0) return 2;
  if (n === 1) return 1;
  let a = 2;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

//onclick function 1
function onclick_catalanNumber() {
  let n = document.getElementById("n_2").value;
  let catlanNumber1 = document.getElementById("catlanNumber");
  catlanNumber1.innerHTML = catalanNumber(n);
}

//onclick function 2
function onclick_triangularNumber() {
  let n = document.getElementById("n_2").value;
  let triangularNumber1 = document.getElementById("triangularNumber");
  triangularNumber1.innerHTML = triangularNumber(n);
}

//onclick function 3
function onclick_harmonicNumber() {
  let n = document.getElementById("n_2").value;
  let harmonicNumber1 = document.getElementById("harmonicNumber");
  harmonicNumber1.innerHTML = harmonicNumber(n);
}

//onclick function 4
function onclick_fibonacciNumber() {
  let n = document.getElementById("n_2").value;
  let fibonacciNumber1 = document.getElementById("fibonacciNumber");
  fibonacciNumber1.innerHTML = fibonacciNumber(n);
}

//onclick function 5
function onclick_lucasNumber() {
  let n = document.getElementById("n_2").value;
  let lucasNumber1 = document.getElementById("lucasNumber");
  lucasNumber1.innerHTML = lucasNumber(n);
}

//compute all
function computeAll_2(){
    onclick_catalanNumber();
    onclick_triangularNumber();
    onclick_harmonicNumber();
    onclick_fibonacciNumber();
    onclick_lucasNumber();
}