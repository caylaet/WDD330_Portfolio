const type = 'hikes';
let newComments = [];
let commentList = document.getElementById('comments');

const comments = {
  loadComments(){
    var typeArray = window.localStorage.getItem(type);
    return JSON.parse(typeArray);
  },
  saveComments(newComments){
    window.localStorage.setItem(type, JSON.stringify(newComments));
  },
  create_comment(hikeName, comment) {
    const newComment = {
      name: hikeName,
      date: new Date(),
      content: comment
    };
    var dd = newComment.date.getDate();
    var mm = newComment.date.getMonth() + 1;
    var yyyy = newComment.date.getFullYear();
    newComment.date = mm+'-'+dd+'-'+yyyy;
    // Pass to addComment function
    this.addComment(newComment);
  },
  addComment(comment){
    // Add to the array
    newComments.push(comment);
    this.saveComments(newComments);
  },
  getAllComments(){
    const reference = this.loadComments();
      // if reference exists
      if (reference) {
        // converts back to array and store it in newComments array
        newComments = reference;
      } else {
        console.log('LocalStorage is empty!');
      }
  
  },
  renderCommentList(newComments){
    newComments.forEach(function(item) {
      console.log(item.date)
      // Make a <li> element and fill it
      const li = document.createElement('li');
      // Add the item comment
      li.innerHTML = `(${item.date}) ${item.name} - ${item.content}`;
      // finally add the <li> to the <ul>
      commentList.append(li);
    });
  },
  filterCommentsByName(hike){
    const filteredComments = [];
    commentList = "";
    newComments.forEach(function(comment) {
      if (comment.hike == hike) {
        filteredComments.push(comment);
      }
    });
    this.renderCommentList(filteredComments);
  }

}
export {comments};