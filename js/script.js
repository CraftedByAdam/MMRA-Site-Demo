const form = document.getElementById('my-form');
const status = document.getElementById('form-status');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Change button text so the user knows it's working
    btn.innerText = "Sending...";
    btn.disabled = true; // Stop them from clicking twice

    const formData = new FormData(form);
    
    fetch("https://formsubmit.co/ajax/your-email@email.com", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // 2. Success! Change the div text and color
            status.innerText = "Thank you! We'll get back to you soon.";
            status.style.color = "#4BB543"; // Success Green
            form.reset(); 
            btn.innerText = "Contact Us";
            btn.disabled = false;
        } else {
            status.innerText = "Oops! There was a problem.";
            status.style.color = "#ff4d4d"; // Error Red
        }
    })
    .catch(error => {
        status.innerText = "Check your internet connection.";
        status.style.color = "orange";
    });
});

