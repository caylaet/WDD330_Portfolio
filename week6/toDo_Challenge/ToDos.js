

const tasks =[];

const todos = document.getElementById("todos");

//So when the user is in the impput box just has to hit enter and can click the + if wanted to.
const input = document.getElementById("new_todo");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
   event.preventDefault();
   document.getElementById("add_todo").click();
  }
});


const view ={

    //Displays all tasks to the user.
    display_list(){
        tasks.forEach(element => {
            todos.appendChild(element);
        });    
    },

    //Displays only completed tasks to the user.
    display_completed_list(){
        todos.innerHTML="";
        tasks.forEach(element => {
            if(element.firstChild.checked){
                todos.appendChild(element)
            }
        });
    },

    //Displays tasks still to be done to the user.
    display_active_list(){
        todos.innerHTML="";
        tasks.forEach(element => {
            if(!element.firstChild.checked){
                todos.appendChild(element)
            }
        });
    },
};



function remove_task(){
    console.log("I have been clicked");
    console.log(this.parentNode.parentNode);
    const task = this.parentNode.parentNode;
    task.remove();
    console.log(tasks);
    let index = tasks.indexOf(task);
    console.log(index);
    tasks.splice(index,1);
    console.log(tasks);

    

};

const action ={
    add_task() {
        const task = this.create_task();
        tasks.push(task);
        console.log(tasks)
        this.clear_input();
        view.display_list();
        
    },
    create_task(){
    
        //Container for the task
        const task = document.createElement("div");
        task.id ="task";
    
        //Checkbox
        const checkbox = document.createElement("input");
        checkbox.type= "checkbox";
        checkbox.addEventListener("click", action.complete_task);
    
        //The task
        const task_description = document.createElement("label");
        const element = document.getElementById("new_todo").value;
        task_description.innerHTML = element;
        
        //The delete element
        const remove = document.createElement("div");
        const x = document.createTextNode("X")
        remove.className = "remove";
        remove.addEventListener('click',remove_task);
        remove.appendChild(x);
    
        //Append them all to the container
        task_description.appendChild(remove);
        task.appendChild(checkbox);
        task.appendChild(task_description);
    
        return task;
    
    },
    clear_input(){
        document.getElementById("new_todo").value="";
    }, 
    complete_task(){
        

    },

}