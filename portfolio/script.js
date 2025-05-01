document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        
        e.preventDefault();

    
        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const subject = form.querySelector("input[name='subject']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

     
        if (!name) {
            alert("Please enter your name.");
            return;
        }

        if (!email) {
            alert("Please enter your email.");
            return;
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!subject) {
            alert("Please enter a subject.");
            return;
        }

        if (!message) {
            alert("Please enter a message.");
            return;
        }


        alert("Form submitted successfully!");
        form.submit();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});