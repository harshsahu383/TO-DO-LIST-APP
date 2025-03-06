// document.getElementById('loginform').addEventListener('submit', function(event){
//     event.preventDefault();

//     const emailInput = document.getElementById('email');
//     const emailError = document.getElementById('emailError');
//     // const email = emailInput.trim();

//     if(validateEmail(email)){
//         emailError.classList.add('hidden');
//         alert("login successfull");
//     }
//     else{
//         emailError.classList.remove('hidden');
//     }
//     function validateEmail(email){
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     }
// });

//// hide and show pass
document.addEventListener('DOMContentLoaded', function () {
    let passwordInput = document.getElementById('password');
    let togglePass = document.getElementById('togglePassword');

    togglePass.addEventListener('click', function(e){
        e.preventDefault();

        if(passwordInput.type === 'password'){
            passwordInput.type = 'text';
            togglePass.src = '/images/show.svg';
            togglePass.style.height ="1.5rem"
            togglePass.style.width ="2rem"
        }
        else{
            passwordInput.type = 'password';
            togglePass.src = '/images/hide.svg';
        }
    })

})