// all js code for home page are written here

/////////some common reusable functions

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







///////// logout button event listener
document.getElementById("logout-btn").addEventListener("click", function(){
    window.location.replace("./index.html");
} )



///////// card section event listener 


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





/////////// add money form 


 // storing all accounts information here on a variable
const accounts = [
        {
            bank: "Islami Bank",
            bankAccountNumber: "12345678901",
            agentNumber: "01234567899",
            pinNumber: "1234"
        },

        {
            bank: "AB Bank",
            bankAccountNumber: "23456789012",
            agentNumber: "01234567898",
            pinNumber: "1234"
        },

        {
            bank: "Sonali Bank",
            bankAccountNumber: "34567890123",
            agentNumber: "01234567897",
            
            pinNumber: "1234"
        }
    ]

// event listener added to form button
document.getElementById("add-money-btn").addEventListener("click", function() {
    
    // top displayed balance value selecting
    const balanceToDisplayAdd = getTextToNum("displayed-balance");
    
    // selecting and getting value of bank select option
    const selectedBankAdd = getValue("bank-select");

    // selecting and getting value of input account number
    const selectedAccountAdd =  getValue("addMoney-accountNumber");

    // input value of amount selecting
    const amountAdd = getValueNumber("addMoney-amount");

    //selecting and getting value of input pin number
    const selectedPinAdd = getValue("addMoney-pin");


    //alert message validation for input field
    if(!selectedBankAdd || !selectedAccountAdd || !amountAdd || !selectedPinAdd) {
        alert("Please fill all required fields");
        return;
    }

    if(!selectedBankAdd){
        alert("Please select a Bank");
        return;
    }
    if(selectedAccountAdd.length !== 11){
        alert("Account number must be 11 digits");
        return;
    }
    if(isNaN(amountAdd) || amountAdd <= 0) {
        alert("Enter valid amount");
        return;
    }
    if(selectedPinAdd.length != 4) {
        alert("Pin must be 4 digits");
        return;
    }
        
    


    // account varification
    const validAccount = accounts.find(account =>
        (account.bank === selectedBankAdd) && 
        (account.bankAccountNumber === selectedAccountAdd) && 
        (account.pinNumber === selectedPinAdd)
    );

    // alert message for invalid account information
    if(!validAccount) {
        alert("Invalid account information");
        return;
    }

    // Update balance
    const currentBalance = balanceToDisplayAdd + amountAdd;

    document.getElementById("displayed-balance").innerText = currentBalance;




    // clear input fields
    document.getElementById("bank-select").selectedIndex = 0;

    document.getElementById("addMoney-accountNumber").value = "";

    document.getElementById("addMoney-amount").value = "";

    document.getElementById("addMoney-pin").value = "";


     // alert message for successfull transaction
    alert(` ${amountAdd} tk successfully added to your account`);
   

})