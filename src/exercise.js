// Function to calculate the number of permutations
function calculatePermutations(m, n) {
    return Math.pow(parseInt(n), parseInt(m));
}

// Function to calculate the Stirling number of the second kind
function calculateStirlingNumber(m, n) {
    if (parseInt(m) === 0 && parseInt(n) === 0) {
        return 1;
    } else if (parseInt(m) === 0 || parseInt(n) === 0 || parseInt(m) < parseInt(n)) {
        return 0;
    } else {
        return parseInt(n) * calculateStirlingNumber(parseInt(m - 1), parseInt(n)) + calculateStirlingNumber(parseInt(m - 1), parseInt(n - 1));
    }
}

// Function to calculate the number of onto functions
function calculateOntoFunctions_1(m, n) {
    if (parseInt(m) < parseInt(n)) {
        return 0; // Cannot have onto functions if m < n
    } else {
        return calculateStirlingNumber(parseInt(m), parseInt(n)) * factorial(parseInt(n));
    }
}

// Function to calculate the factorial of a number
function factorial(num) {
    if (parseInt(num) === 0 || parseInt(num) === 1) {
        return 1;
    } else {
        return parseInt(num) * factorial(parseInt(num - 1));
    }
}

// Function to calculate the number of onto functions (allow empty container, all containers look the same)
function calculateOntoFunctions_2(m, n) {
    if (parseInt(m) < parseInt(n)) {
        return 0; // Cannot have onto functions if m < n
    } else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum = sum + calculateStirlingNumber(parseInt(m), parseInt(i));
        }
        return sum;
    }
}

// Function to calculate the number of onto functions (not allow empty container, all containers look the same)
function calculateOntoFunctions_3(m, n) {
    if (parseInt(m) < parseInt(n)) {
        return 0; // Cannot have onto functions if m < n
    } else {
        return calculateStirlingNumber(parseInt(m), parseInt(n));
    }
}

// Function to calculate the binomial coefficient C(m + n - 1, m)
function calculateBinomialCoefficient_1(m, n) {
    return factorial(parseInt(m) + parseInt(n) - 1) / (factorial(parseInt(m)) * factorial(parseInt(n) - 1));
}

// Function to calculate the binomial coefficient C(m - 1, m - n)
function calculateBinomialCoefficient_2(m, n) {
    return factorial(parseInt(m) - 1) / (factorial(parseInt(m) - parseInt(n)) * factorial(parseInt(n) - 1));
}

// Function to generate all unique partitions of m into exactly n summands
function generateUniquePartitions(m, n) {
    const partitions = [];

    // Helper function for recursion
    function generate(currentPartition, remainingSum, remainingCount, start) {
        if (remainingCount === 0 && remainingSum === 0) {
            // Sort the current partition to make it unique
            const sortedPartition = [...currentPartition].sort((a, b) => a - b);
            partitions.push(sortedPartition);
            return;
        }

        for (let i = start; i <= remainingSum; i++) {
            currentPartition.push(i);
            generate(currentPartition, remainingSum - i, remainingCount - 1, i);
            currentPartition.pop();
        }
    }

    generate([], m, n, 1);
    return partitions.length;
}

// Function to generate all unique partitions of m into at most n summands
function generatePartions(m,n){
    if(parseInt(m)==parseInt(n)){
        return 1;
    }
    else{
        let sum = 0;
        for(let i=1;i<=n;i++){
            sum += generateUniquePartitions(m,i);
        }
        return sum;
    }
}


//Return Result 1
//Function onclick to calculate the number of permutations
function onclick_calculatePermutations() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_1 = document.getElementById("result_1");
    result_1.innerHTML = calculatePermutations(m, n);
}

//Return Result 2
function onclick_calculateOntoFunctions_1() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_2 = document.getElementById("result_2");
    result_2.innerHTML = calculateOntoFunctions_1(m, n);
}

//Return Result 3
function onclick_calculateOntoFunctions_2() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_3 = document.getElementById("result_3");
    result_3.innerHTML = calculateOntoFunctions_2(m, n);
}

//Return Result 4
function onclick_calculateOntoFunctions_3() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_4 = document.getElementById("result_4");
    result_4.innerHTML = calculateOntoFunctions_3(m, n);
}

//Return Result 5
function onclick_calculateBinomialCoefficient_1() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_5 = document.getElementById("result_5");
    result_5.innerHTML = calculateBinomialCoefficient_1(m, n);
}

//Return Result 6
function onclick_calculateBinomialCoefficient_2() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_6 = document.getElementById("result_6");
    result_6.innerHTML = calculateBinomialCoefficient_2(m, n);
}

//Return Result 7
function onclick_calculatePartitions_1() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_7 = document.getElementById("result_7");

    console.log(generatePartions(4, 3));
    result_7.innerHTML = generatePartions(parseInt(m), parseInt(n));
}

//Return Result 8
function onclick_calculatePartitions_2() {
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    let result_8 = document.getElementById("result_8");

    console.log(generateUniquePartitions(4, 3));
    result_8.innerHTML = generateUniquePartitions(parseInt(m), parseInt(n));
}

function computeAll(){
    onclick_calculatePermutations();
    onclick_calculateOntoFunctions_1();
    onclick_calculateOntoFunctions_2();
    onclick_calculateOntoFunctions_3();
    onclick_calculateBinomialCoefficient_1();
    onclick_calculateBinomialCoefficient_2();
    onclick_calculatePartitions_1();
    onclick_calculatePartitions_2();
}





