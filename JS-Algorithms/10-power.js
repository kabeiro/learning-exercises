// write a function which accepts a base and an exponent
// it should return the power of the base to the exponent
// and mimic the functionality of Math.pow()
// do not worry about negative bases and exponents

function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, exp-1);
}

power(2,0); // 1
power(2,2); // 4
power(2,4); // 16