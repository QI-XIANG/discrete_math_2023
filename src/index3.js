// Function to calculate Eulerian numbers A(m, k) for 0 <= k <= m-1
function eulerianNumber(m, k) {
  function binomialCoefficient(n, k) {
    if (k === 0 || k === n) return 1;

    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }

    return Math.round(result);
  }

  if (k < 0 || k >= m) return 0;

  let result = 0;
  for (let j = 0; j <= k; j++) {
    result +=
      Math.pow(-1, j) *
      binomialCoefficient(m - k - 1, j) *
      Math.pow(k - j, m - 1);
  }

  return result;
}

// Function to calculate Stirling numbers of the second kind S(m, n) for 1 <= n <= m
function stirlingNumberSecondKind(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  
  if (m === n) return 1;
  if (n === 0 || n > m) return 0;
  

  // Initialize the array for dynamic programming
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= m; i++) {
    dp[i][1] = 1;
  }

  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      dp[i][j] = dp[i - 1][j - 1] + j * dp[i - 1][j];
    }
  }

  return dp[m][n];
}

//onclick function
function onclick_eulerianNumber() {
  let m = document.getElementById("m").value;
  let k = document.getElementById("k").value;
  let eulerian_number_1 = document.getElementById("eulerian_number");
  eulerian_number_1.innerHTML = eulerianNumber(m, k);
}

function onclick_stirlingNumberSecondKind() {
  let m = document.getElementById("m_1").value;
  let n = document.getElementById("n_1").value;
  let stirlingNumberSecondKind_1 = document.getElementById(
    "stirlingNumberSecondKind_1"
  );
  stirlingNumberSecondKind_1.innerHTML = stirlingNumberSecondKind(m, n);
}

function computeAll_3() {
  onclick_eulerianNumber();
}

function computeAll_4() {
  onclick_stirlingNumberSecondKind();
}
