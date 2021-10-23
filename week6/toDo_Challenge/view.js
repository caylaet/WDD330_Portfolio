import {count_unchecked_items, create_task} from './utilities.js';
import {tasks,todos,tasks_left} from './variables';


//Displays all tasks to the user.
function display_list(){
    todos.innerHTML="";
    tasks.forEach(element => {
        const todo = create_task(element);
        todos.appendChild(todo);
    });    
};

//Displays only completed tasks to the user.
function display_completed_list(){
    todos.innerHTML="";
    tasks.forEach(element => {
        if(element.completed){
            const todo = create_task(element);
            todos.appendChild(todo);
        };
    });
};

//Displays tasks still to be done to the user.
function display_active_list(){
    todos.innerHTML="";
    tasks.forEach(element => {
        if(!element.completed){
            const todo = create_task(element);
            todos.appendChild(todo);
        };
    });
};
//Displays a number for the tasks still left to be completed.
function display_number_tasks_left(){
    const total_checked = count_unchecked_items(tasks);
    tasks_left.innerHTML = total_checked + " tasks left";
    
};
export{display_list,display_completed_list, display_active_list,display_number_tasks_left};