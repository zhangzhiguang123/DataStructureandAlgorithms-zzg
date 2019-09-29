/**
 *
 *
 * @class Queue
 */
class Queue {
    constructor() {
        this.count = 0; //记录队列的大小
        this.lowestCount = 0; //记录队列第一个元素
        this.items = {};
    }
    enqueue(...rest) {    //向对列末尾添加一个或多个项
        if (rest.length === 0) return;
        rest.forEach(item=>{
            this.items[this.count] = item;
            this.count++;
        })
    }
    dequeue() {    //删除队列元素（即头部元素）
        if (this.isEmpty()) {
            return null;
        }
        const result = this.items[this.lowestCount]; //保存要删除的值
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek() {     //查看队列头元素
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.lowestCount];
    }
    size() {    //返回队列的长度
        return this.count - this.lowestCount;
    }
    isEmpty() {  //检测队列是否为空
        return this.size() === 0;
    }
    clear() {    //清空队列
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {  //将队列元素以字符串形式返回
        if (this.isEmpty()) {
            return '';
        }
        let element = this.items[this.lowestCount];
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            element = `${element},${this.items[i]}`;
        }
        return element;
    }
}
     let myQueue = new Queue();
     myQueue.enqueue(1,2,3,4);
     console.log(myQueue.toString()); //1,2,3,4
     console.log(myQueue.size()); //4
     console.log(myQueue.peek()); //1
     console.log(myQueue.isEmpty());//false
     myQueue.dequeue();
     console.log(myQueue.toString()); //2,3,4
     console.log(myQueue.size()); //3
     console.log(myQueue.peek()); //2
     console.log(myQueue.isEmpty());//false
     myQueue.clear();
     console.log(myQueue.toString()); //''
     console.log(myQueue.size()); //0
     console.log(myQueue.peek()); //null
     console.log(myQueue.isEmpty());//true