document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if email or password fields are empty
    if (email === "" || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Store email in local storage and redirect
    let a = localStorage.setItem('userEmail', email); 
    console.log(a)
    window.location.href = 'index.html'; 
});



function validateUser (username, password) {
    let allSignUpDataArray = JSON.parse(localStorage.getItem("signupData")) || [];
    return allSignUpDataArray.some(user => user.email === username && user.password === password);
}

const formElement = document.getElementById("login__form");
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let enteredUsername = formData.get("email");
    let enteredPassword = formData.get("password");
    let isValid = validateUser (enteredUsername, enteredPassword);

    if (isValid) {
        alert("Login Successful!");
        window.location.href = "./index.html"; // Redirect to homepage
    } else {
        alert("Invalid credentials. Please try again.");
    }
});