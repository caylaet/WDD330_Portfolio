
function loadTodos(){
    var toDoArray = window.localStorage.getItem("toDoArray");
    console.log(toDoArray);
    return JSON.parse(toDoArray);

}
function saveTodos(array){
    window.localStorage.setItem("toDoArray",JSON.stringify(array));
}
export{loadTodos,saveTodos};