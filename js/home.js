// all js code for home page are written here

// logout button event listener
document.getElementById("logout-btn").addEventListener("click", function(){
    window.location.replace("./index.html");
} )

// card section event listener 
// toggling function
function togglingCard(cardId, formId) {
    const cardSelection = document.getElementById(cardId)
    cardSelection.addEventListener("click", function(){
        const addMoneyForm = document.getElementById(formId);
        addMoneyForm.style.display = "block";
        cardSelection.style.backgroundColor = "#0874f20d"
        cardSelection.style.border = " 1px solid #0874f2"
    })
}

togglingCard("add-money", "add-money-form");