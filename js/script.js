const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const close = document.querySelector(".close");

const loginSection = document.querySelector(".login");
const forgotSection = document.querySelector(".forgot");
const registerSection = document.querySelector(".register");


register.addEventListener("click", (e) => {
     loginSection.style.display = "none";
     registerSection.style.display = "flex";
    
});

login.addEventListener("click", (e) => {
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
   
});

forgot.addEventListener("click", (e) => {
    loginSection.style.display = "none";
    forgotSection.style.display = "flex";
   
});

login.addEventListener("click", (e) => {
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
   
});

close.addEventListener("click", (e) => {
    forgotSection.style.display = "none";
    loginSection.style.display = "flex";
   
});