document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    var saveButton = document.querySelector('.btn-primary');
    
    saveButton.addEventListener('click', function(event) {
        var username = document.querySelector('input[type="text"][value="RNT"]').value;
        var email = document.querySelector('input[type="text"][value="RTN@gmail.com"]').value;
        
        if (username === "" || email === "") {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all required fields.");
        } else {
            alert("Changes saved successfully!");
        }
    });


    // Dynamic Profile Picture Upload
    var fileInput = document.querySelector('.account-settings-fileinput');
    var profileImage = document.querySelector('img.d-block');

    fileInput.addEventListener('change', function() {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
})
