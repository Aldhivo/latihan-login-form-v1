const menu = document.getElementById("icon-menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () =>{
    nav.classList.toggle("hidden");
})

const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.addEventListener("click", () =>{
    if(password.type == "password"){
        password.type = "teks";
        eye.classList.add("fa-eye");
    }
    else{
        password.type = "password";
        eye.classList.remove("fa-eye")
    }
})