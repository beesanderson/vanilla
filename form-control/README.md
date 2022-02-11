# Before and After Refactor:

Just an example of form validation in vanilla JS refactoring before and after.

## If Statements (not clean nor scalable)

```JS
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





// ---------------- Event Listeners ----------------------
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is Required')
    } else {
        showSuccess(username)
    }

    if(email.value === '') {
        showError(email, 'Email is Required')
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not Valid')
    } else {

        showSuccess(email)
    }

    if(password.value === '') {
        showError(password, 'Password is Required')
    } else {
        showSuccess(password)
    }

    if(password2.value === '') {
        showError(password2, 'Reenter Password is Required')
    } else {
        showSuccess(password2)
    }


})
```

## Refactored with 'High Order Array' Method.

Instructor has separate video lesson that explains each high order array method (there are reportedly five.) I've used `forEach()` the most personally. The first time was while making my [JavaScript SnakeGame]()
