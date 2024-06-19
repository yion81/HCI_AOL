document.addEventListener('DOMContentLoaded', function() {
    function validateForm(event) {
        event.preventDefault();

        // Get form elements
        var name = document.querySelector('.name_input').value;
        var email = document.querySelector('.email_input').value;
        var password = document.querySelector('.password_input').value;

        // Regular expressions for validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passwordPattern = /.{6,}/; // At least 6 characters

        // Validate name
        if (name.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        // Validate email
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validate password
        if (!passwordPattern.test(password)) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        // If all validations pass
        alert('Registration successful!');
        return true;
    }

    // Attach event listener to the button
    document.querySelector('.login_button').addEventListener('click', validateForm);
});
