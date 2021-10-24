
import {loadTodos} from './ls.js';
import {display_list, display_completed_list, display_active_list,display_number_tasks_left} from './view.js';
import {tasks, todos, tasks_left, add, display_completed, display_active, display} from './variables.js';
import { add_task} from './action.js';

//Retrieve local storage
const saved = loadTodos();
if(saved !== null){
    tasks.push(...saved);
};

//When the user is in the impput box just has to hit enter and can click the + if wanted to.
const input = document.getElementById("new_todo");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add_todo").click();
    };
});

//Add event listeners to all the buttons
add.addEventListener('click', add_task);
display_completed.addEventListener('click',display_completed_list);
display_active.addEventListener('click',display_active_list);
display.addEventListener('click',display_list);

//Start the displays
display_number_tasks_left(tasks_left);
display_list(todos);

