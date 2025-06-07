function validateForm() {
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validCountry = false;
    var validZipcode = false;
	
    // Clear all warnings
	document.querySelectorAll('.warning').forEach(function(div) {
		div.innerHTML = "";
	});
	
    // First Name
    var firstname = document.getElementById("FirstName").value;
    var fnameMessages = "";
    if (firstname === "null" || firstname === "" || firstname.length > 20) {
        fnameMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
		} else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        fnameMessages += "<p>First name must contain only letters</p>";
		} else {
        validFirstname = true;
	}
    document.getElementById("fname").innerHTML = fnameMessages;
	
    // Last Name
    var lastname = document.getElementById("LastName").value;
    var lnameMessages = "";
    if (lastname === "null" || lastname === "" || lastname.length > 20) {
        lnameMessages += "<p>The lastname is required and cannot be greater than 20 characters</p>";
		} else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
        lnameMessages += "<p>Last name must contain only letters</p>";
		} else {
        validLastname = true;
	}
    document.getElementById("lname").innerHTML = lnameMessages;
	
    // Email
    var userEmail = document.getElementById("Email").value;
    var emailMessages = "";
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        emailMessages += "<p>Invalid email</p>";
		} else {
        validEmail = true;
	}
    document.getElementById("emailError").innerHTML = emailMessages;
	
    // Phone + EXTRA CREDIT
    var phone = document.getElementById("Phone").value.trim();
    var phoneMessages = "";
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    var digitsOnly = /^[0-9]+$/;
	
    if (phone.match(digitsOnly) && phone.length === 10) {
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        document.getElementById("Phone").value = phone;
	}
	
    if (phone === "" || phone === null || phone.length > 15 || !phonePattern.test(phone)) {
        phoneMessages += "<p>Phone number must be in format 123-456-7890</p>";
		} else {
        validPhone = true;
	}
    document.getElementById("phoneError").innerHTML = phoneMessages;
	
    // Username
    var username = document.getElementById("Username").value;
    var usernameMessages = "";
    if (username === "" || username.length > 12) {
        usernameMessages += "<p>Username is required and must be 12 characters or fewer</p>";
		} else {
        validUsername = true;
	}
    document.getElementById("usernameError").innerHTML = usernameMessages;
	
    // Password + EXTRA CREDIT
    var password = document.getElementById("Password").value;
    var passwordMessages = "";
    var pwPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
    if (password === "" || password.length > 7) {
        passwordMessages += "<p>Password is required and must be 7 characters or fewer</p>";
		} else if (!pwPattern.test(password)) {
        passwordMessages += "<p>Password must include upper, lower, number, and special character</p>";
		} else {
        validPassword = true;
	}
    document.getElementById("passwordError").innerHTML = passwordMessages;
	
    // Address
    var address = document.getElementById("Address").value;
    var addressMessages = "";
    if (address === "") {
        addressMessages += "<p>Address is required</p>";
		} else {
        validAddress = true;
	}
    document.getElementById("addressError").innerHTML = addressMessages;
	
    // City
    var city = document.getElementById("City").value;
    var cityMessages = "";
    if (city === "") {
        cityMessages += "<p>City is required</p>";
		} else {
        validCity = true;
	}
    document.getElementById("cityError").innerHTML = cityMessages;
	
    // State
    var state = document.getElementById("State").value;
    var stateMessages = "";
    if (state === "") {
        stateMessages += "<p>State is required</p>";
		} else {
        validState = true;
	}
    document.getElementById("stateError").innerHTML = stateMessages;
	
    // Country
    var country = document.getElementById("Country").value;
    var countryMessages = "";
    if (country === "") {
        countryMessages += "<p>Country is required</p>";
		} else {
        validCountry = true;
	}
    document.getElementById("countryError").innerHTML = countryMessages;
	
    // ZipCode
    var zipcode = document.getElementById("ZipCode").value;
    var zipMessages = "";
    if (country === "USA") {
        if (!zipcode.match(/^\d{5}$/)) {
            zipMessages += "<p>Zipcode is required and must be 5 digits</p>";
			} else {
            validZipcode = true;
		}
		} else {
        validZipcode = true;
	}
    document.getElementById("zipError").innerHTML = zipMessages;
	
    var formValid = (
        validFirstname && validLastname && validEmail && validPhone &&
        validUsername && validPassword && validAddress && validCity &&
        validState && validCountry && validZipcode
	);
	
    if (!formValid) {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
	}
	
    return formValid;
}
