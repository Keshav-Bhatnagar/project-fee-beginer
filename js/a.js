document.getElementById('login__form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if email and password meet the length requirements
    if (email.length < 3) {
        alert('Username (email) must be at least 3 characters long.');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

   let a = localStorage.setItem('userEmail', email); 
   console.log(a)
   window.location.href = 'index.html'; // Redirect to index.html

});

let allSignUpDataArray = JSON.parse(localStorage.getItem("signupData")) || [];
const formElement = document.getElementById("login__form");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let userAlreadyExist = allSignUpDataArray.some(user => user.email === formData.get("email"));

    if (userAlreadyExist) {
        alert("User  Email already exists. Please try with another Email");
    } else {
        let obj = {};
        formData.forEach((v, k) => obj[k] = v);
        allSignUpDataArray.push(obj);
        localStorage.setItem("signupData", JSON.stringify(allSignUpDataArray));
        alert("User  Registered Successfully!");
        formElement.reset();
    }
});