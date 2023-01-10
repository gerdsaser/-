const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const FormBox = document.querySelector(".form-box");
const body = document.body;
 

signUpBtn.addEventListener("click", function () {
    FormBox.classList.add("active");
    body.classList.add("active");
});



signInBtn.addEventListener("click", function () {
    FormBox.classList.remove("active");
    body.classList.remove("active");
});