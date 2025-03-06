document.addEventListener('DOMContentLoaded', function () {
    // Toggle for Password field
    let passwordInput = document.getElementById('password');
    let togglePassword = document.getElementById('togglePassword');

    if (togglePassword) {
        togglePassword.addEventListener('click', function (e) {
            e.preventDefault();

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePassword.src = '/images/show.svg';
            } else {
                passwordInput.type = 'password';
                togglePassword.src = '/images/hide.svg';
            }
        });
    }

    // Toggle for Confirm Password field
    let confirmPasswordInput = document.getElementById('confirmpassword');
    let toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', function (e) {
            e.preventDefault();

            if (confirmPasswordInput.type === 'password') {
                confirmPasswordInput.type = 'text';
                toggleConfirmPassword.src = '/images/show.svg';
            } else {
                confirmPasswordInput.type = 'password';
                toggleConfirmPassword.src = '/images/hide.svg';
            }
        });
    }
});