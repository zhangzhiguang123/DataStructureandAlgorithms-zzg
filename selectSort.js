function selectSort(array){
    let indexMax;
    for(let i=0;i<array.length-1;i++){
        indexMax = i;//设置记录最大值下标的变量，每次遍历先赋成i
        for(let j=i;j<array.length;j++){  //筛选i后最大值,将其下标保存到indexMax中
            if(array[j]>array[indexMax]){
                indexMax = j;
            }
        }
        if(i!==indexMax){
            [array[i],array[indexMax]] = [array[indexMax],array[i]];//将寻找到的最大值与array[i]交换位置
        }
    }
    return array;
}

console.log(selectSort([2,3,1,2,4,6,7]));