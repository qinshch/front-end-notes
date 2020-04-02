function isPalindrome(str){
    let reg = /[\W_]/g,
    newStr = str.replace(reg,"").toLowerCase(),
    reverseStr = newStr.split("").reverse().join('');

    return newStr === reverseStr;
}