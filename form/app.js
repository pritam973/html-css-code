function validate(event) {
    event.preventDefault(); // Prevent form submission
    let form = document.querySelector(".form"); // Corrected from .from

    // Get form values
    let fname = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value; // Date of birth
    let password = document.getElementById("password").value.trim();

    console.log(fname, email, phone, dob, password);

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]+$/; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate full name
    if (!fname || !nameRegex.test(fname)) {
        alert("Name field cannot be empty and should only contain letters.");
        return;
    }

    // Validate password length
    if (password.length < 8) {
        alert("Password length cannot be less than 8 characters.");
        return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number length (assuming a 10-digit format)
    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate date of birth
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    // If all validations pass, show success and reset the form
    alert("Form submitted successfully!");
    form.reset();
}
