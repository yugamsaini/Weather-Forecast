const loginForm = document.querySelector("form");
const loginButton = document.getElementById("login-btn");
const rememberMe = document.getElementById("remember-me");

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
    // get the value entered in the username field
	const username = loginForm.username.value;
	const password = loginForm.password.value;

	// perform validation here

	if (rememberMe.checked && username !== "" && password !== "") {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	}

	// redirect to home page here
});
