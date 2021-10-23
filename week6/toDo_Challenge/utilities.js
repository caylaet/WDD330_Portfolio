
function count_unchecked_items(tasks){
    let total_checked = 0;
    tasks.forEach(element =>{
        if (!element.completed){
            total_checked += 1
        }
    });
    return total_checked;
};
export{count_unchecked_items};