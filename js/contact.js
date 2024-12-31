document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = form.querySelector('input[type="text"][placeholder="Name"]').value;
        const email = form.querySelector('input[type="email"][placeholder="Email"]').value;
        const phone = form.querySelector('input[type="text"][placeholder="Phone Number"]').value;
        const message = form.querySelector('input[type="text"][placeholder="Message"]').value;

        if (!name || !email || !phone || !message) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill out all fields.");
        } else {
            // Optionally, you can prevent the default submission if you want to show the alert before actually submitting
            event.preventDefault(); // Prevent default submission for demonstration
            alert("Thank you for your submission!");
            form.submit(); // Now submit the form
        }
    });
});