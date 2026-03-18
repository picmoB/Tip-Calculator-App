// ----------------------------------------------

const user = {
    username: "admin@aspira.hr",
    password: "123123",
};

// ----------------------------------------------

const submitLoginButton = document.getElementById("submitLoginButton");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");

submitLoginButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username == user.username) {
        console.log("Ispravan Username");
        if (password == user.password) {
            console.log("Ispravan password");
            // ulogiraj korisnika
            console.log("Korisnik uspjesno ulogiran!");
            message.textContent = "Logged In";
            message.className = "success";
        } else {
            console.log("Pogresan Password");
            message.textContent = "Invalid Credentials";
            message.className = "fail";
        }
    } else {
        console.log("User s unesenim Username-om ne postoji");
        message.textContent = "Invalid Credentials";
        message.className = "fail";
    }
});
