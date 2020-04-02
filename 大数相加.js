
function bigSum(a,b){
    let result = '',
        carry = false;

    a = a.split('');
    b = b.split('');

    while(a.length || b.length || carry){
        carry = ~~a.pop() + ~~b.pop() + carry;
        result = carry%10 + result;
        carry = carry/10;
    }
    return result.replace(/^0+/, '');
}