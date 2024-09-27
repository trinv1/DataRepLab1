const ages = [25, 31, 42, 77];//array of ages

let a = ages.map((item)=>{//using map function to create new array and multiply each item by 2
    if (item < 70)//if item bigger than 20 multiply item by 2
        return item*2;

    else //else return item
        return item;
})

console.log(a);//outputting to console