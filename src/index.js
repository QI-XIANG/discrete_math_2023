function Factorial(n) {
    fact = 1;

    for (i = 2; i <= n; i++)

        fact *= i;

    return fact;

}

function Perm(n, r) {
    perm = n;

    for (i = n - 1; i > n - r; i--)

        perm *= i;

    return perm;

}

function Comb(n, r) {
    return Perm(n, r) / Factorial(r);

}

function invalid(n, r) {
    if (parseInt(n) < 0 || isNaN(parseInt(n))) {
        document.getElementById("n").focus();

        return true;

    }

    else if (parseInt(r) < 0 || isNaN(parseInt(r))) {
        document.getElementById("r").focus();

        return true;

    }

    return false;
}


function computeAll() {
    document.getElementById("resPermutation").innerHTML = "";

    document.getElementById("resCombination").innerHTML = "";

    document.getElementById("resArrangement").innerHTML = "";

    document.getElementById("resSelectrofn").innerHTML = "";

    n = document.getElementById("n").value;

    r = document.getElementById("r").value;

    if (invalid(n, r)) return;

    clickPerm();

    clickComb();

    clickArra();

    clickSele();

}


function clickPerm() {
    document.getElementById("resPermutation").innerHTML = "";

    n = document.getElementById("n").value;

    r = document.getElementById("r").value;

    if (invalid(n, r)) return;

    document.getElementById("resPermutation").innerHTML = Perm(n, r);

}

function clickComb() {
    document.getElementById("resCombination").innerHTML = "";

    n = document.getElementById("n").value;

    r = document.getElementById("r").value;

    if (invalid(n, r)) return;

    document.getElementById("resCombination").innerHTML = Comb(n, r);

}


function clickArra() {
    document.getElementById("resArrangement").innerHTML = ""

    n = document.getElementById("n").value;

    r = document.getElementById("r").value;

    if (invalid(n, r)) return;

    document.getElementById("resArrangement").innerHTML = Math.pow(n, r);

}


function clickSele() {
    document.getElementById("resSelectrofn").innerHTML = "";

    n = parseInt(document.getElementById("n").value);

    r = parseInt(document.getElementById("r").value);

    if (invalid(n, r)) return;

    document.getElementById("resSelectrofn").innerHTML = Comb(n + r - 1, r);

}