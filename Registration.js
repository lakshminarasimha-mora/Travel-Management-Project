// Select the card element
const card = document.getElementById("card");

// Function to show the Register side
function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}

// Function to show the Login side
function openLogin() {
    card.style.transform = "rotateY(0deg)";
}

// Optional: Close search bar or menu if user clicks the card
document.querySelector('.card').onclick = () => {
    // This integrates with your previous header scripts
    if(typeof navbar !== 'undefined') {
        navbar.classList.remove('active');
        menu.classList.remove('fa-times');
    }
};

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents page reload
        
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        console.log("Form Submitted Successfully:", email);
        alert("Registration/Login Successful!");
    });
});