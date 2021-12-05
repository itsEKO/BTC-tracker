// formula APY = (1 + r/n ) ** n – 1


function calculate(r, n){
    //r = stated annual interest rate
    //n = number of compounding periods

    var apy = (1 + r/n) ** n - 1;
    return apy
}