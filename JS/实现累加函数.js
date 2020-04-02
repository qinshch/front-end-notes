//sum(1,2,3)(2).valueOf()

function sum(){
    let result = [];
    result = [...arguments].reduce((x,y)=>x+y, 0);

    let add = function(){
        result = [...arguments].reduce((x,y)=>x+y, result);
        return add;
    };

    add.valueOf = function(){
        return result;
    }

    return add;
}

console.log(sum(1,2,3,4,5)(6)(7).valueOf());