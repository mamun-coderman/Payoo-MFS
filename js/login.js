// Login page js code



document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();
    // pre-stored mobile number and pin
    const mobileNumber = "01515295665";
    const password = "1234";

    // input mobile number and pin selection
    const inputMobileNumber = document.getElementById("mobile-number").value;
    const inputMobileNumberConverted = parseInt(inputMobileNumber);
    const inputPin = document.getElementById("pin-number").value;

    // compare both mobile number and pin equality
    if( (mobileNumber === inputMobileNumber) && (password === inputPin) ) {
        window.location.href="./home.html";
        }
    else{
        alert("Invalid mobile number or password");
    }
});

