function flattenArray(array){
    if(Array.isArray(array)) return;

    let result = [];

    result = array.reduce(function(pre,item){
        return pre.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

function flattenArray(array){
    return array.toString().split(',').map(x=>Number(x));
}