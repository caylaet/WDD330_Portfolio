
import {loadTodos,saveTodos} from './ls.js';
import {count_unchecked_items} from './utilities.js';

const tasks = [];
const saved = loadTodos();
if(saved !== null){
    tasks.push(...saved);
}


//So when the user is in the impput box just has to hit enter and can click the + if wanted to.
const input = document.getElementById("new_todo");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add_todo").click();
    }
});

//Displays all tasks to the user.
function display_list(todos){
    todos.innerHTML="";
    tasks.forEach(element => {
        const todo = create_task(element)
        todos.appendChild(todo);
    });    
};

//Displays only completed tasks to the user.
function display_completed_list(todos){
    todos.innerHTML="";
    tasks.forEach(element => {
        if(element.completed){
            const todo = create_task(element)
            todos.appendChild(todo)
        }
    });
};

//Displays tasks still to be done to the user.
function display_active_list(todos){
    todos.innerHTML="";
    tasks.forEach(element => {
        if(!element.completed){
            const todo = create_task(element)
            todos.appendChild(todo)
        }
    });
};
//Displays a number for the tasks still left to be completed.
function display_number_tasks_left(tasks_left){
    const total_checked = count_unchecked_items(tasks);
    tasks_left.innerHTML = total_checked + " tasks left";
    
};

function add_todo(todo){
    tasks.push(todo);
};



function create_todo(string){
    
    const todo = {
        id : Date.now(), 
        content: string, 
        completed: false
    };
    return todo
};

function remove_task(){
    if (tasks.length == 1){
        localStorage.clear();
    }else{
        const content = this.previousElementSibling;
        const index = tasks.findIndex(todo => todo.content === content.innerHTML);
        tasks.splice(index,1);
        saveTodos(tasks);
        display_list(todos);
    }    
    
};

function clear_input(){
    document.getElementById("new_todo").value="";
}; 

function add_task() {
    const content = document.getElementById("new_todo").value;
    const todo = new create_todo(content);
    add_todo(todo);
    clear_input();
    display_list(todos);
    display_number_tasks_left();
    saveTodos(tasks);
    
};

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
    
    //The task
    const task_description = document.createElement("label");
    const element = todo.content;
    task_description.innerHTML = element;
    if(todo.completed){
        task_description.classList.add("strike");
    };
    
    //The delete element
    const remove = document.createElement("div");
    const x = document.createTextNode("X")
    remove.className = "remove";
    remove.addEventListener('click',remove_task);
    remove.addEventListener('click', display_number_tasks_left);
    remove.appendChild(x);
    
    //Append them all to the container
    task.appendChild(checkbox);
    task.appendChild(task_description);
    task.appendChild(remove);
    
    return task;
    
};

const todos = document.getElementById("todos");
const tasks_left = document.getElementById("tasks_left");
const add = document.getElementById("add_todo").addEventListener('click', add_task);
const display_completed = document.getElementById("display_completed").addEventListener('click',display_completed_list);
const display_active = document.getElementById("display_active").addEventListener('click',display_active_list);
const display = document.getElementById("display").addEventListener('click',display_list);

display_number_tasks_left(tasks_left);
display_list(todos);
