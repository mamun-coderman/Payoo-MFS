// all js code for home page are written here

//some common reusable functions

//inner text
function getText(id) {
    return document.getElementById(id).innerText;
} 

// inner text converted to number
function getTextToNum(id) {
    return parseInt(document.getElementById(id).innerText);
}

// getting input value
function getValue(id) {
    return document.getElementById(id).value;
}

//getting input value converted to number
function getValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}

// reusable function making ends here







//// logout button event listener
document.getElementById("logout-btn").addEventListener("click", function(){
    window.location.replace("./index.html");
} )

//// card section event listener 
// toggling function
function togglingCard(cardId, formId) {
    const cardToClick = document.getElementById(cardId)
    cardToClick.addEventListener("click", function(){
        //hiding all other form without clicked related form
        const hidingForms = document.querySelectorAll(".form-section");
        hidingForms.forEach(function(form) {
            form.style.display = "none";
        })

        // all cards default color
        const cardsDefaultColor = document.querySelectorAll(".card-area");
        cardsDefaultColor.forEach(function(card) {
            card.style.border = "1px solid #0808081a"
            card.style.backgroundColor = "white";
        })

        // showing particular form with click
        const showingForm = document.getElementById(formId);
        showingForm.style.display = "block";
        cardToClick.style.backgroundColor = "#0874f20d";
        cardToClick.style.border = " 1px solid #0874f2";
    })
}

// toggling function calling for add money
togglingCard("add-money", "add-money-form");

// toggling function calling for cash out
togglingCard("cash-out-card", "cash-out-form");

// toggling function calling for transfer money
togglingCard("transfer-money-card", "transfer-money-form");

// toggling function calling for get bonus
togglingCard("get-bonus-card", "get-bonus-form");

// toggling function calling for pay bill
togglingCard("pay-bill-card", "pay-bill-form");

// toggling function calling for transaction history
togglingCard("transaction-card", "transaction-form");


//// add money form 

 // storing all accounts here on a variable
const accounts = [
        {
            bank: "Islami Bank",
            accountNumber: "12345678901",
            pinNumber: "2341"
        },

        {
            bank: "AB Bank",
            accountNumber: "23456789012",
            pinNumber: "3412"
        },

        {
            bank: "Sonali Bank",
            accountNumber: "34567890123",
            pinNumber: "4123"
        }
    ]

// event listener added to form button
document.getElementById("add-money-btn").addEventListener("click", function() {
    
    // top displayed balance value selecting
    const balanceToDisplay = getTextToNum("displayed-balance");
    
    // selecting and getting value of bank select option
    const selectedBank = getValue("bank-select");

    // selecting and getting value of input account number
    const selectedAccount =  getValue("add-money-account-number");

    // input value of amount selecting
    const addingAmount = getValueNumber("add-amount");

    //selecting and getting value of input pin number
    const selectedPin = getValue("pin-number");


    //alert message validation for input field
    if(!selectedBank || !selectedAccount || !addingAmount || !selectedPin) {
        alert("Please fill all required fields");
        return;
    }

    if(!selectedBank){
        alert("Please select a Bank");
        return;
    }
    if(selectedAccount.length !== 11){
        alert("Account number must be 11 digits");
        return;
    }
    if(isNaN(addingAmount) || addingAmount <= 0) {
        alert("Enter valid amount");
        return;
    }
    if(selectedPin.length != 4) {
        alert("Pin must be 4 digits");
        return;
    }
        
    


    // account varification
    const validAccount = accounts.find(account =>
        (account.bank === selectedBank) && 
        (account.accountNumber === selectedAccount) && 
        (account.pinNumber === selectedPin)
    );

    // alert message for invalid account information
    if(!validAccount) {
        alert("Invalid account information");
        return;
    }

    // Update balance
    const currentBalance = balanceToDisplay + addingAmount;

    document.getElementById("displayed-balance").innerText = currentBalance;


    // clear input fields
    document.getElementById("bank-select").selectedIndex = 0;

    document.getElementById("add-money-account-number").value = "";

    document.getElementById("add-amount").value = "";

    document.getElementById("pin-number").value = "";


    // alert message for successfull transaction
    alert(` ${addingAmount} tk successfully added to your account`);

})