document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email_input');
    const passwordInput = document.querySelector('.password_input');
    const loginButton = document.querySelector('.login_button');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        let valid = true;
        let errorMessage = '';

        if (!validateEmail(emailInput.value)) {
            valid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        if (passwordInput.value.length < 6) {
            valid = false;
            errorMessage += 'Password must be at least 6 characters long.\n';
        }

        if (!valid) {
            alert(errorMessage);
        } else {
            // If the form is valid, you can submit it or proceed with further actions
            alert('Form submitted successfully!');
        }
    });
});
