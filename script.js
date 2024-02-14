

document.getElementById('registration-form').addEventListener('submit',validateForm);
function validateForm() {
    let isValid = true;
    // Name validation
    const firstName = document.getElementById('firstName');
    const fnameError = document.getElementById('fnameError');
    if (firstName.value.trim() === '') {
        fnameError.textContent = 'First name is required.';
        isValid = false;
    } else {
        fnameError.textContent = '';
    }
    
    // Mail validation
    const email = document.getElementById('userMail');
    const MailError = document.getElementById('MailError');
    const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        MailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        MailError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('userPassword');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*]).{8,24}$/;
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else if(!passwordRegex.test(password.value)){
        passwordError.textContent = 'Password consists atleast 1 Uppercase,1 Lowercase,1 Digit,1 Special character,minumum 8 characters';
        isValid = false;
    }else{
        passwordError.textContent = '';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Terms acceptance validation
    const terms = document.getElementById('terms');
    const termsError = document.getElementById('termsError');
    if (!terms.checked) {
        termsError.textContent = 'Please accept the Terms of Use & Privacy Policy.';
        isValid = false;
    } else {
        termsError.textContent = '';
    }

    if(!isValid){
        event.preventDefault();
    }

    return isValid;
}

