import { tasks } from './variables.js';
import {remove_task, complete_task} from './action.js';
import {display_number_tasks_left} from './view.js'

//Returns a todo with all of its functionality from a todo object
function create_task(todo){
    
    //Container for the task
    const task = document.createElement("div");
    task.id ="task";
    
    //Checkbox
    const checkbox = document.createElement("input");
    checkbox.type= "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("click", complete_task);
    checkbox.addEventListener('click', display_number_tasks_left);
    checkbox.classList.add("checkbox");
    
    //The task
    const task_description = document.createElement("label");
    const element = todo.content;
    task_description.innerHTML = element;
    task_description.classList.add("content");
    if(todo.completed){
        task_description.classList.add("strike");
    };
    
    //The delete element
    const remove = document.createElement("div");
    const x = document.createTextNode("X");
    remove.classList.add("remove");
    remove.addEventListener('click',remove_task);
    remove.addEventListener('click', display_number_tasks_left);
    remove.appendChild(x);
    
    //Append them all to the container
    task.appendChild(checkbox);
    task.appendChild(task_description);
    task.appendChild(remove);
    
    return task;
    
};
//Returns how many todos in task array are checked
function count_unchecked_items(tasks){
    let total_checked = 0;
    tasks.forEach(element =>{
        if (!element.completed){
            total_checked += 1
        }
    });
    return total_checked;
};

//returns a todo object
function create_todo(string){
    
    const todo = {
        id : Date.now(), 
        content: string, 
        completed: false
    };
    return todo;
};

//Adds a todo object to the task array
function add_todo(todo){
    tasks.push(todo);
};

//clears the input field
function clear_input(){
    document.getElementById("new_todo").value="";
}; 

export{count_unchecked_items,create_task,create_todo, add_todo, clear_input};