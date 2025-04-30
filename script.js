function sendMessage(event) {
    event.preventDefault();
    alert("Thanks for reaching out, Krish will get back to you soon!");
  }
  // Get modal and card elements
const modal = document.getElementById("fitness-modal");
const fitnessCard = document.getElementById("fitness-card");
const closeModalBtn = document.getElementById("close-modal");

// When the user clicks on the fitness card, open the modal
fitnessCard.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
