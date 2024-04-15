
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInFormWrapper = document.querySelector('.form-wrapper.sign-in');
const signUpFormWrapper = document.querySelector('.form-wrapper.sign-up');

signUpBtnLink.addEventListener('click', () => {
    signInFormWrapper.style.transform = 'translateY(-450px)';
    signUpFormWrapper.style.transform = 'translateY(0)';
});

signInBtnLink.addEventListener('click', () => {
    signInFormWrapper.style.transform = 'translateY(0)';
    signUpFormWrapper.style.transform = 'translateY(-450px)';
});

