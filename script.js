const container = document.getElementById('container');

document.getElementById('register').onclick = () => container.classList.add("active");
document.getElementById('login').onclick = () => container.classList.remove("active");

// SIGN UP
signupForm.onsubmit = (e) => {
    e.preventDefault();
    localStorage.user = signupEmail.value + "|" + signupPassword.value;
    signupMessage.innerText = "Signup done!";
    container.classList.remove("active");
};

// LOGIN
loginForm.onsubmit = (e) => {
    e.preventDefault();

    if(!localStorage.user){
        loginMessage.innerText = "Not signed up!";
        return;
    }

    let [email, pass] = localStorage.user.split("|");

    if(loginEmail.value === email && loginPassword.value === pass){
        loginMessage.style.color = "green";
        loginMessage.innerText = "Login success!";
        setTimeout(()=> location.href="index.html", 800);
    } else {
        loginMessage.innerText = "Wrong data!";
    }
};