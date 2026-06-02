// all js code for home page are written here

// logout button event listener
document.getElementById("logout-btn").addEventListener("click", function(){
    window.location.replace("./index.html");
} )

// card section event listener 
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