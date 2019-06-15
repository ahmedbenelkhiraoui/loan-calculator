document.querySelector(".loan-form").addEventListener("submit", e => {
  // Hide results
  document.querySelector(".results-box").style.display = "none";
  // Show loader
  document.querySelector(".loader").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  // UI Vasr
  const amount = document.querySelector(".amount");
  const interest = document.querySelector(".interest");
  const years = document.querySelector(".years");
  const monthlyPayment = document.querySelector(".monthly-payment");
  const totalPayment = document.querySelector(".total-payment");
  const totalInterest = document.querySelector(".total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatePayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = (monthly * calculatePayments - principal).toFixed(2);
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".results-box").style.display = "block";
  } else {
    document.querySelector(".loader").style.display = "none";
    showError("Please check your numbers");
  }
}

// Show error
function showError(error) {
  document
    .querySelector(".container")
    .insertAdjacentHTML("afterbegin", `<div class="error">${error}</div>`);

  //Clear error after 3sec
  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 3000);
}
