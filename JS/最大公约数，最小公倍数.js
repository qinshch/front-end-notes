//辗转相除法：大/小，小/余数...等余数为0，最后被除的数就是最大公约数。

function getMaxCommonDivisor(a, b){
    if(a<b){
        let temp = a,
        a = b,
        b = temp;
    }
    let c = a%b;
    while(c!=0){
        a = b;
        b = c;
        c = a % b;
    }
    return b;
}

function getMinCommonMultiple(a, b){
    return a * b/getMaxCommonDivisor(a, b);
}

console.log(getMaxCommonDivisor(25, 15));
console.log(getMinCommonMultiple(25, 15));