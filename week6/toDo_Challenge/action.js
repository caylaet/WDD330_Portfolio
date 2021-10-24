
import {saveTodos} from './ls.js';
import {tasks,todos} from './variables.js';
import {display_list,display_number_tasks_left} from './view.js';

//If as task is marked complete,this will add a strike through it, update array and local storage that it has been completed and update display with how many tasks left
function complete_task(){
    const content = this.nextElementSibling;
    const index = tasks.findIndex(todo => todo.content === content.innerHTML);
    if(!tasks[index].completed){
        content.classList.add("strike");
        tasks[index].completed = true;
        saveTodos(tasks);
        display_number_tasks_left();
        
        
    }else{
        content.classList.remove("strike");
        tasks[index].completed = false;
        saveTodos(tasks);
        display_number_tasks_left();
    }
};

//If a task is removed this will remove it from local storage and tasks array as well as update display
function remove_task(){
    if (tasks.length == 1){
        localStorage.clear();
        tasks =[];
        display_list(todos);
    }else{
        const content = this.previousElementSibling;
        const index = tasks.findIndex(todo => todo.content === content.innerHTML);
        tasks.splice(index,1);
        saveTodos(tasks);
        display_list(todos);
    }    
    
};
export{remove_task, complete_task};