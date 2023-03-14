const emailContainer = document.getElementsByTagName("input")[0];
const submitButton = document.querySelector(".submit-btn");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.createElement("p");
const successMessage = document.createElement("p");

errorMessage.id = "error-message";
successMessage.id = "success-message";

errorMessage.innerHTML = "Please enter a valid email address";
successMessage.innerHTML = "Thank you for contacting us!";

errorMessage.style.color = "red";

submitButton.addEventListener("click", () => {
    if (emailContainer.value.indexOf("@") === -1) {
        document.getElementsByTagName("main")[0].appendChild(errorMessage);
        errorIcon.style.display = "block";
        emailContainer.style.borderColor = "red";
        document.getElementById("success-message").remove();
    } else {
        document.getElementsByTagName("main")[0].appendChild(successMessage);
        document.getElementById("error-message").remove();
        errorIcon.style.display = "none";
        emailContainer.style.borderColor = "lightpink";
    }

});