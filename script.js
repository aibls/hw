function validateForm() {
    let isValid = true;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name === "") {
        document.getElementById('nameError').innerText = "Name cannot be empty";
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = "";
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById('emailError').innerText = "Enter a valid email";
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    if (password.length < 8) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters";
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}
