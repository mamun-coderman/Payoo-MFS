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
togglingCard("add-money-card", "add-money-form");

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





 //////// storing all accounts information here on a variable
const accounts = [
        {
            bank: "Islami Bank",
            payment: "Electricity Bill",
            bankAccountNumber: "12345678901",
            agentNumber: "01234567899",
            userAccount: "11111111111",
            billerAccount: "22222222222",
            bonusCoupon: "112233",
            pinNumber: "1234"
        },

        {
            bank: "AB Bank",
            payment: "Land Tax",
            bankAccountNumber: "23456789012",
            agentNumber: "01234567898",
            userAccount: "11111111111",
            billerAccount: "22222222222",
            bonusCoupon: "112233",
            pinNumber: "1234"
        },

        {
            bank: "Sonali Bank",
            payment: "Income Tax",
            bankAccountNumber: "34567890123",
            agentNumber: "01234567897",
            userAccount: "11111111111",
            billerAccount: "22222222222",
            bonusCoupon: "112233",
            pinNumber: "1234"
        }
    ]




/////////// add money form 

// event listener added to form button
document.getElementById("add-money-btn").addEventListener("click", function() {
    
    // top displayed balance value selecting
    const balanceToDisplay = getTextToNum("displayed-balance");
    
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
    const currentBalanceAdd = balanceToDisplay + amountAdd;

    document.getElementById("displayed-balance").innerText = currentBalanceAdd;




    // clear input fields
    document.getElementById("bank-select").selectedIndex = 0;

    document.getElementById("addMoney-accountNumber").value = "";

    document.getElementById("addMoney-amount").value = "";

    document.getElementById("addMoney-pin").value = "";


     // alert message for successfull transaction
    alert(` ${amountAdd} tk successfully added to your account`);
   

})




///////// Cash out form

document.getElementById("cash-out-btn").addEventListener("click", function() {
    // top displayed balance value selecting
    const balanceToDisplay = getTextToNum("displayed-balance");

    // agent number input value selecting
    const selectedAgentNumber = getValue("cash-out-agent-number");

    // cash out amount selecting
    const selectedAmountCash = getValueNumber("amount-cashout");

    // cash out pin number selecting
    const selectedPinCash = getValue("cashOut-pin");



    // alert message validation for cash out form section input field
    if(!selectedAgentNumber || selectedAgentNumber.length !== 11) {
        alert("You must enter 11 digit valid account number");
        return;
    }
    if(!selectedAmountCash || isNaN(selectedAmountCash) || selectedAmountCash <= 0) {
        alert("Enter valid amount to withdrow");
        return;
    }
    if(!selectedPinCash || selectedPinCash.length !== 4) {
        alert("Enter 4 digit valid pin");
        return;
    }


    // account varification
    const validAccount = accounts.find(account =>
    (account.agentNumber === selectedAgentNumber) &&
    (account.pinNumber === selectedPinCash)
    );

    //alert message for account information
    if(!validAccount) {
        alert("Invalid account information")
        return;
    };

    // alert message for insufficient balance
    if(selectedAmountCash > balanceToDisplay) {
        alert("Insufficient balance!")
    }


    // update balance
    const currentBalanceCash = balanceToDisplay - selectedAmountCash;
    document.getElementById("displayed-balance").innerText = currentBalanceCash;


    //clear input field
    document.getElementById("cash-out-agent-number").value = "";
    document.getElementById("amount-cashout").value = "";
    document.getElementById("cashOut-pin").value = "";
})




/////// Transfer Money form

document.getElementById("transfer-money-btn").addEventListener("click", function() {
    // top displayed balance value selecting
    const balanceToDisplay = getTextToNum("displayed-balance");

    // agent number input value selecting
    const selectedUserAccount = getValue("userAccount-transfer");

    // cash out amount selecting
    const selectedAmountTransfer = getValueNumber("amount-transfer");

    // cash out pin number selecting
    const selectedPinTransfer = getValue("pin-transfer");



    // alert message validation for cash out form section input field
    if(!selectedUserAccount || selectedUserAccount.length !== 11) {
        alert("You must enter 11 digit valid account number");
        return;
    }
    if(!selectedAmountTransfer || isNaN(selectedAmountTransfer) || selectedAmountTransfer <= 0) {
        alert("Enter valid amount to transfer");
        return;
    }
    if(!selectedPinTransfer || selectedPinTransfer.length !== 4) {
        alert("Enter 4 digit valid pin");
        return;
    }


    // account varification
    const validAccount = accounts.find(account =>
    (account.userAccount === selectedUserAccount) &&
    (account.pinNumber === selectedPinTransfer)
    );

    //alert message for account information
    if(!validAccount) {
        alert("Invalid account information")
        return;
    };

    // alert message for insufficient balance
    if(selectedAmountTransfer > balanceToDisplay) {
        alert("Insufficient balance!")
    }


    // update balance
    const currentBalanceTransfer = balanceToDisplay - selectedAmountTransfer;
    document.getElementById("displayed-balance").innerText = currentBalanceTransfer;


    //clear input field
    document.getElementById("userAccount-transfer").value = "";
    document.getElementById("amount-transfer").value = "";
    document.getElementById("pin-transfer").value = "";
})





////////// Bonus coupon form section 

document.getElementById("bonus-btn").addEventListener("click", function() {
    // top displayed balance value selecting
    const balanceToDisplay = getTextToNum("displayed-balance");

    // bonus coupon selecting
    const selectedBonusCoupon = getValue("bonus-coupon");

  

    // coupon varification
    const validCoupon = accounts.find(account => 
        account.bonusCoupon === selectedBonusCoupon
    );

    // alert message for invalid coupon
    if(!validCoupon) {
        alert("Wrong Coupon");
    }

    // balance update
    const bonusAmount = 10000;
    const currentBalanceBonus = balanceToDisplay + bonusAmount;
    document.getElementById("displayed-balance").innerText = currentBalanceBonus;


    // clear input
    document.getElementById("bonus-coupon").value = "";

})





// pay bill form section

document.getElementById("pay-bill-btn").addEventListener("click", function() {
    
    // top displayed balance value selecting
    const balanceToDisplay = getTextToNum("displayed-balance");
    
    // selecting and getting value of payment select option
    const selectedPayment = getValue("payment-select");

    // selecting and getting value of biller account number
    const selectedBillerAccount =  getValue("biller-account");

    // input value of amount selecting
    const amountPaybill = getValueNumber("amount-paybill");

    //selecting and getting value of input pin number
    const selectedPinPaybill = getValue("paybill-pin");



    if(!selectedPayment){
        alert("Please select a Bank");
        return;
    }
    if(!selectedBillerAccount || selectedBillerAccount.length !== 11){
        alert("Account number must be 11 digits");
        return;
    }
    if(!amountPaybill || isNaN(amountPaybill) || amountPaybill <= 0) {
        alert("Enter valid amount");
        return;
    }
    if(!selectedPinPaybill || selectedPinPaybill < 0 || selectedPinPaybill.length != 4) {
        alert("Pin must be 4 digits positive integer");
        return;
    }
        
    


    // account varification
    const validAccount = accounts.find(account =>
        (account.payment === selectedPayment) && 
        (account.billerAccount === selectedBillerAccount) && 
        (account.pinNumber === selectedPinPaybill)
    );

    // alert message for invalid account information
    if(!validAccount) {
        alert("Invalid account information");
        return;
    }


    // alert message for insufficient balance
    if(amountPaybill > balanceToDisplay) {
        alert("Insufficient Balance");
        return;
    }

    // Update balance
    const currentBalancePaybill = balanceToDisplay - amountPaybill;

    document.getElementById("displayed-balance").innerText = currentBalancePaybill;




    // clear input fields
    document.getElementById("payment-select").selectedIndex = 0;

    document.getElementById("biller-account").value = "";

    document.getElementById("amount-paybill").value = "";

    document.getElementById("paybill-pin").value = "";
   

})