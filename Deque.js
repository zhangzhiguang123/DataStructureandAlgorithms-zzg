/**
 *
 *
 * @class Deque
 */
class Deque {  //声明双端队列类
    constructor() {
        this.items = {};  //队列对象
        this.lowestCount = 0; //头部项的下标值
        this.count = 0;  //队列长度计数器(注意:this.count位置上永远是无值的。队列不为空，它的前一位就为队列尾部项);
    }
    isEmpty() {   //判断双端队列是否为空，返回布尔值
        return (this.count - this.lowestCount) === 0;
    }
    clear() {     //清空双端队列，无返回值
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }
    size() {   //返回双端队列的大小
        return this.count - this.lowestCount;
    }
    addFront(element) {  //在双端队列前添加一个项
        if (this.lowestCount === this.count) {  //队列为空的情况
            this.items[this.count] = element;
            this.count++;
            return;
        }
        if (this.lowestCount === 0) {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.items[0] = element;
            this.count++;
        } else {
            this.items[this.lowestCount - 1] = element;
            this.lowestCount--;
        }
    }
    addBack(element) {   //在双端队列后面添加一项
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {      //删除双端队列头部项
        if (this.lowestCount === this.count) {
            return undefined;
        }
        let w = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return w;
    }
    removeBack() {       //删除双端队列尾部项
        if (this.lowestCount === this.count) {
            return undefined;
        }
        let w = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return w;
    }
    peekFront() {        //查看双端队列头部项
        return this.items[this.lowestCount];
    }
    peekBack() {         //查看双端队列尾部项
        return this.items[this.count - 1];
    }
    toString() {         //将队列项转成字符串
        if (this.lowestCount === this.count) {
            return '';
        }
        let str = this.items[this.lowestCount];
        for (let i = this.lowestCount+1; i < this.count; i++) {
            str = `${str},${this.items[i]}`;
        }
        return str;
    }
}

//双端队列的使用
let myDeque = new Deque();
console.log(myDeque.size()); //0

myDeque.addFront(1);  //在头部添加元素
myDeque.addFront(2);
console.log(myDeque.size()); //2
console.log(myDeque.toString()); //2,1
console.log(myDeque.isEmpty()); //false

myDeque.addFront(6);

console.log(myDeque.size()); //3
console.log(myDeque.toString()); //6,2,1

myDeque.addBack(8);
myDeque.addBack(3);

console.log(myDeque.size()); //5
console.log(myDeque.toString()); //6,2,1,8,3

myDeque.removeFront();

console.log(myDeque.size()); //4
console.log(myDeque.toString()); //2,1,8,3

myDeque.removeBack();

console.log(myDeque.size()); //3
console.log(myDeque.toString()); //2,1,8

console.log(myDeque.peekFront());  //查看头项  //2
console.log(myDeque.peekBack());   //查看尾项  //8

myDeque.clear();   //清空

console.log(myDeque.isEmpty());  //true