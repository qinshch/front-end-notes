//1. 原型链继承
//缺点：含引用类型的属性会被所有实例共享，会修改混乱
//缺点：创建子类型的实例时，不能向超类型的构造函数中传递参数

function SuperType(name){
    this.name = name;
    this.show = function(){
        console.log(this.name);
    }
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.age = 10;
/*
function SubType(){

}

SubType.prototype = new SuperType();
let obj = new SubType();
console.log(obj.age); //10
*/

//2.借用构造函数
//优点：可以在子类型构造函数中向超类型构造函数添加参数
//优点：引用类型不会再公用
//缺点：所有的方法都在构造函数中定义，因此无法复用
//缺点：无法继承超类型的原型中定义的方法, instanceOf也不能识别

/*
function SubType(){
    SuperType.call(this, "hahaha");
}

let instance = new SubType();
instance.colors.push("black");
console.log(instance.colors); //[ 'red', 'blue', 'green', 'black' ]
console.log(instance.name); //hahaha

let instance1 = new SuperType("lalala");
console.log(instance1.colors); //[ 'red', 'blue', 'green' ]
console.log(instance1.name); //lalala
*/


//3.组合继承（结合1，2）
//优点：融合了两者的优点。
//优点：instanceof也能使用
/*
function SubType(name){
    SuperType.call(this, name); //构造函数继承
}

SubType.prototype = new SuperType(); //继承原型链

var instance = new SubType("James", 9);
instance.colors.push("black");
console.log(instance.colors); [ 'red', 'blue', 'green', 'black' ]
console.log(instance.name); //James

let instance1 = new SuperType("lalala");
console.log(instance1.colors); //[ 'red', 'blue', 'green' ]
console.log(instance1.name); //lalala

console.log(instance instanceof SuperType); //true
*/

//4.原型式继承(即为Object.create()方法！)
//感觉跟原型链继承差不多只是封装了一下？感觉缺点也差不多。
/*
function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
var sup = new SuperType("aaa");
var sup1 = object(sup);
console.log(sup1.name); //aaa
*/

//5.寄生式继承
function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
var sup = new SuperType();

function subobject(obj){
    var sub = object(obj);
    sub.name = "gar";
    return sub;
}

var sup2 = subobject(sup);
