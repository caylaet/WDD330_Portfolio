// Error-Handling Class
export class ErrorHandler {
  // Constructor
  constructor(errorId) {
    // Get the error ID from week11.js
    this.errorElement = document.getElementById(errorId);
  }
  // Method for handling errors
  handleError(error, callback) {
    // Parse error code from error string object
    const eCode = error.message.substring(0, 3);
    this.displayError(error);
    // If login authentication fails, display login form again
    if (eCode == 401 || eCode == 500) {
      callback();
    }
    // Display the error code to the console
    console.log(eCode);
  }
  // Method for displaying errors
  displayError(error) {
    // Display the error message
    this.errorElement.innerHTML = error.message;
    // Remove any 'hidden' CSS classes from the error section
    this.errorElement.classList.remove('hidden');
  }
  // Method for clearing any existent errors
  clearError() {
    // Clear error field of any existing errors
    this.errorElement.innerHTML = '';
    // Add CSS 'hidden' classes to the error section
    this.errorElement.classList.add('hidden');
  }
}

// Server Address
const baseURL = 'http://127.0.0.1:3000/';
// helper function to make an http request with fetch.
// returns a json object
export async function makeRequest(url, method = 'GET', body = null, token = null) {
  // we will need to set some custom options for our fetch call
    let options = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // if we are sending any data with the request add it here
  if (method == 'POST' || method == 'PUT') {
    options.body = JSON.stringify(body);
  }

  // if a token was passed in we should send it on.
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  
  const response = await fetch(baseURL + url, options);
  // in this case we are processing the response as JSON before we check the status. The API we are using will send back more meaningful error messages than the default messages in the response, but we have to convert it before we can get to them.
  const data = await response.json();

  if (!response.ok) {
    // server will send a 500 server error if the token expires...or a 401 if we are not authorized, ie bad username/password combination, and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false

    console.log(response);
    throw new Error(`${data.status}: ${data.message}`);
  } else {
    return data;
  }
  // not catching the error here...so we will need to catch it later on and handle it.
}