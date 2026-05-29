const signupForm = document.querySelector('form');

const submitHandler = (event) => {

    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const contactInfo = document.getElementById('contactInfo').value.trim();
    const password = document.getElementById('password').value;
    
    const day = document.getElementById('birthDay').value;
    const month = document.getElementById('birthMonth').value;
    const year = document.getElementById('birthYear').value;
    const gender = document.getElementById('gender').value;

    
    if (!firstName || !lastName || !contactInfo || !password) {
        alert("Error: Form cannot be empty. Please fill all fields.");
        return;
    }

    if (day === "Day" || month === "Month" || year === "Year" || gender === "Select your gender") {
        alert("Error: Please select your Birthday and Gender.");
        return;
    }

    if (password.length < 8) {
        alert("Error: Password must be at least 8 characters long.");
        return;
    }

    const userObj = {
        firstName: firstName,
        lastName: lastName,
        emailOrMobile: contactInfo,
        password: password,
        dob: `${day}/${month}/${year}`,
        genderID: gender
    };

    console.log("Registration Successful!", userObj);
    alert("User signup successfully.");

};

signupForm.addEventListener('submit', submitHandler);