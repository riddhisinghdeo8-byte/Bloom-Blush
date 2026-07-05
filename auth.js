// -------------------------
// LOGIN / SIGNUP TOGGLE
// -------------------------

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const tabs = document.querySelectorAll(".tab");

function showLogin() {

    loginForm.style.display = "block";
    signupForm.style.display = "none";

    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");

}

function showSignup() {

    loginForm.style.display = "none";
    signupForm.style.display = "block";

    tabs[1].classList.add("active");
    tabs[0].classList.remove("active");

}

// -------------------------
// SHOW / HIDE PASSWORD
// -------------------------

function togglePassword(id){

    let input = document.getElementById(id);

    if(input.type === "password"){

        input.type = "text";

    }

    else{

        input.type = "password";

    }

}

// -------------------------
// SIGN UP
// -------------------------

document.querySelectorAll(".main-btn")[1].addEventListener("click", function () {

    let name = signupForm.querySelector('input[type="text"]').value.trim();
    let email = signupForm.querySelector('input[type="email"]').value.trim();
    let password = document.getElementById("signupPass").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully 💖");
    showLogin();

});

// -------------------------
// LOGIN
// -------------------------

document.querySelectorAll(".main-btn")[0].addEventListener("click", function () {

    let email = loginForm.querySelector('input[type="email"]').value.trim();
    let password = document.getElementById("loginPass").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("No account found. Please Sign Up first.");
        return;
    }

    if (email === user.email && password === user.password) {

        localStorage.setItem("loggedIn", "true");

        alert("Welcome back " + user.name + " 💖");

        window.location.href = "index.html";

    } else {

        alert("Incorrect Email or Password");

    }

});