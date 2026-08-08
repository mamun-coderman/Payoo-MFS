// Login page js code



document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();
    // pre-stored mobile number and pin
    const mobileNumber = "01515295665";
    const password = "mamun";

    // input mobile number and pin selection
    let inputMobileNumber = document.getElementById("mobile-number").value;
    let inputMobileNumberConverted = parseInt(inputMobileNumber);
    let inputPin = document.getElementById("pin-number").value;

    // compare both mobile number and pin equality
    if( (mobileNumber === inputMobileNumber) && (password === inputPin.trim()) ) {
        window.location.href="./home.html";
        }
    else{
        alert("Invalid mobile number or password");
    }

});

