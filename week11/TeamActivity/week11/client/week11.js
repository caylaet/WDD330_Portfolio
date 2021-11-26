import { ErrorHandler, makeRequest } from './authHelpers.js';
import Auth from './auth.js';

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
// });

// Create instances
const myEInstance = new ErrorHandler('errors');
var myInstance = new Auth(myEInstance);

// Create event listener
var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    // Call the getPosts method on successful login
    myInstance.login(getPosts);
});

// Create a function to pull all of the posts from the API and call it after a successful login
async function getPosts() {
    try {
        // Initialize a constant response object
        const response = await makeRequest('posts', 'GET', null, myInstance.token);
        // Make sure the form is shown
        removeClass();
        // Display the response
        console.log(response);
        // Display a list of posts
        var list = document.getElementById('list');
        // Set list string to empty
        list.innerHTML = '';
        // Loop through the responses
        for (var i = 0; i < response.length; i++) {
            // Create a new list item
            var item = document.createElement('li');
            // Add each response piece to the list item
            item.appendChild(document.createTextNode(response[i].title + ":" + response[i].content));
            // Add the item to the list
            list.appendChild(item);
        }
        // Clear any possible errors
        myEInstance.clearError();
    } catch (error) {
        // Display any possible errors
        console.log(error);
        myEInstance.handleError(error);
    }
}

// Create a listener for handling a new post submission event
var create = document.getElementById('createSubmit');
create.addEventListener('click', createPost())

// Method for handling new post creation events
async function createPost() {
    // Call the form named postForm
    const form = document.forms.postForm;
    // Display the form to the console as a table
    console.dir(form);
    // Check form validity
    if (form.title.validity.valid && form.content.validity.valid) {
        // Clear any possible errors
        myEInstance.clearError();
        // Set new form data object
        const data = {
            title: form.title.value,
            content: form.content.value
        };
        try {
            // Create a response object
            const response = await makeRequest('posts', 'POST', data, myInstance.token);
            // Display the created post to the console
            console.log('Post create: ', data);
            // Clear the form title and content values
            form.title.value = '';
            form.content.value = '';
            // Call the getPosts method to display updated post list
            getPosts();
        } catch (error) {
            // Display error message
            console.log(error);
            myEInstance.handleError(error);
        }
    } else {
        myEInstance.displayError({ message: 'Title and Content are required' });
    }
}

// Function to remove class list items
function removeClass() {
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('postForm').classList.remove('hidden');
    document.getElementById('listDiv').classList.remove('hidden');
}