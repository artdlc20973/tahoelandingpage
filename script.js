const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signupBtn = document.querySelector('.signup-Btn');
const loginBtn = document.querySelector('.login-Btn');
const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');
const formContainer = document.querySelector('.form-container')

signupBtn.addEventListener('click', () => {
        signupModal.classList.add('display');
        formContainer.classList.add('disable')
    })

loginBtn.addEventListener('click', () => {
        loginModal.classList.add('display');
        formContainer.classList.add('disable')
    })

signupX.addEventListener('click', (e) => {
        signupModal.classList.remove('display');
    })

loginX.addEventListener('click', (e) => {
        loginModal.classList.remove('display');
    })

