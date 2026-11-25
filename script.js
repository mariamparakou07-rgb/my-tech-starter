

const revealButton = document.querySelector("#reveal-button");
const result = document.querySelector("#result");

revealButton.addEventListener("click", showPersonalMessage);

function showPersonalMessage() {
  result.textContent = "ΟΥΑΟΥ ΛΑΤΡΕΥΩ ΤΟ ΙΕΚ ΔΕΛΤΑ 360!";
}
