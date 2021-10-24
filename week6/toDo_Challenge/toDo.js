
import {loadTodos,saveTodos} from './ls.js';
import {display_list,display_completed_list, display_active_list,display_number_tasks_left} from './view.js';
import {tasks,todos,tasks_left} from './variables.js';

const saved = loadTodos();
if(saved !== null){
    tasks.push(...saved);
};

//So when the user is in the impput box just has to hit enter and can click the + if wanted to.
const input = document.getElementById("new_todo");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add_todo").click();
    };
});

display_number_tasks_left(tasks_left);
display_list(todos);

//Adds a todo object to the task array
function add_todo(todo){
    tasks.push(todo);
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


//clears the input field
function clear_input(){
    document.getElementById("new_todo").value="";
}; 

//Creates and adds to the task array and local storage. Also displays list and number of tasks
function add_task() {
    const content = document.getElementById("new_todo").value;
    const todo = new create_todo(content);
    add_todo(todo);
    clear_input();
    display_list(todos);
    display_number_tasks_left();
    saveTodos(tasks);
    
};





const add = document.getElementById("add_todo").addEventListener('click', add_task);
const display_completed = document.getElementById("display_completed").addEventListener('click',display_completed_list);
const display_active = document.getElementById("display_active").addEventListener('click',display_active_list);
const display = document.getElementById("display").addEventListener('click',display_list);

