let tasks = [];//array 

let addTasks = (task)=>{//function with string parameter 'task'
    tasks.push(task);//add tasks to task array
    console.log(task + " task added");//logging added task to console
    return tasks.length;//returning number of tasks
}

addTasks("Work");//calling add task function to add 'Work' task

let listAllTasks = ()=>{//function to list all tasks
        tasks.forEach((element)=>{//iterate through each element of array
        console.log(element);//logging elements to console
    });

}

listAllTasks();//calling function;

let deleteTask = (task)=>{//delete tasks from array function
    let index = tasks.indexOf(task);//finding the index of the specified task in array

    if(index > -1){//checking if the tasks exists in the array
        tasks.splice(index,1);//if found it removes taskj from array
        console.log(task + "has been deleted")
    }

    else{//else if not found log this message
        console.log(task + "not found in my tasks");
    }

    return tasks.length;//return num of tasks in array
}

deleteTask("rgfrgv ");//trying to delete
deleteTask("Work ");//trying to delete



