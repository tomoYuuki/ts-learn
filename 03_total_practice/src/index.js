"use strict";
/**************   3 泛型       *******************/
// 3.1 泛型变量 T
function createSentence(arg) {
    return "我的长度是:" + arg.length;
}
console.log(createSentence([1, 2, 3]));
// 3.2 泛型类型
function genericIdentity(str) {
    console.log(str);
    return str;
}
// 这个就是泛型类型的注解
let generics1 = genericIdentity;
// 3.2.1 泛型字面量
let generics2 = genericIdentity;
let generics3 = genericIdentity;
// 3.3 泛型类
class GenericNumber {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
    min() {
        // 最小值
        return this.list.sort()[0];
    }
}
let number = new GenericNumber();
number.add(4);
number.add(5);
number.add(3);
console.log(number.list);
console.log(number.min());
