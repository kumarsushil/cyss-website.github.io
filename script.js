// Add interactivity here if needed
console.log("CYSS website is running!");

// Add success message after form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset(); // Clear the form
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        alert('Oops! Something went wrong. Please try again.');
    });
});