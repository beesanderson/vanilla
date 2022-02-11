// will do if statements first. Simple easy way

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// ----------- Functions --------------

// Show Input Error Message
function showError(input, message) {
    // .parentElement will get the form control div
    const formControl = input.parentElement;
    // change class to error color and display the small text below
    formControl.className = 'form-control error';
    // create variable for small text
    const small = formControl.querySelector('small');
    // display error message from submit event listener as small variable 
    small.innerText = message;
}


// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    // change form input outline when successful
    formControl.className = 'form-control success'
}

// Check Email Validity
function isValidEmail(email) {
    // With regular expression
    // Just search "js email regex" for validation
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

// Check Required Fields
function checkRequired(inputArr) {
    //have to loop through each item in array. will do by using higher order array method
    inputArr.forEach(function(input) {
        // creating input as index variable for each array item
        if(input.value.trim() === '') {
            // To display what is required access name through html id
            console.log(input.id) // to see 
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
}

// Get Field Name (to capitalize first letter of small text for errorMessage)
function getFieldName(input) {
    // use character at method to change the first letter (zero based indexing duh) to capitalized letter then concatenate the rest of the input minus first letter by accessing the input content by way of id then using the .slice() method and selecting which character (zero based indexing again duh) we'd like to pick up from.
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}





// ---------------- Event Listeners ----------------------
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Higher Order Array Function =>
        // Instead of passing through each field (ie username, password, email, etc) we can pass through an array of objects
    checkRequired([username, email, password, password2]);

})