document.addEventListener("DOMContentLoaded", () => {
    const popUp = document.getElementById("pop-up");
    const loginSection = document.querySelector(".login");
    const logo = document.querySelector(".logo");

    // Wait for the pop-up animation to finish
    popUp.addEventListener("animationend", () => {
        // Dynamically set the position of the login section to match the pop-up's position
        const popUpRect = popUp.getBoundingClientRect();
        loginSection.style.top = `${popUpRect.top}px`;
        loginSection.style.left = `${popUpRect.left}px`;
        loginSection.style.width = `${popUpRect.width}px`;

        // Add the `show` class to make the login and logo visible
        loginSection.classList.add("show");
        logo.classList.add("show");
    });
});



const patientForm = document.getElementById('patientForm');
const patientNameInput = document.getElementById('patientName');
const patientList = document.getElementById('patientList');

// Add patient functionality
patientForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const patientName = patientNameInput.value;

    if (patientName) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${patientName} <button onclick="removePatient(this)">Remove</button>`;
        patientList.appendChild(listItem);
        patientNameInput.value = '';
    }
});

// Remove patient functionality
function removePatient(button) {
    const listItem = button.parentElement;
    patientList.removeChild(listItem);
}

