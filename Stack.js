/**
 *
 *
 * @class Stack
 */
class Stack{         //创建栈类
    constructor(){
        this.items = [];
    }
    push(element){  //向栈顶添加元素
        this.items.push(element);
   }
    pop(){          //从栈移出元素
        return this.items.pop();
    }
    peek(){         //查看栈顶元素
        return this.items[this.items.length-1];
    }
    isEmpty(){      //检查栈是否为空
        return this.items.length===0;
    }
    size(){         //查看栈的长度
        return this.items.length;
    }
    clear(){        //清空栈
        this.items=[];
    }
}

let myStack = new Stack();
myStack.push(3);  //添加元素
myStack.push(5);  
myStack.push(7);
console.log(myStack.size());  //3
console.log(myStack.peek());  //7
myStack.pop();//删除元素
console.log(myStack.size());  //2
console.log(myStack.peek());  //5
console.log(myStack.isEmpty());// false
myStack.clear();//清空栈
console.log(myStack.isEmpty()); // true