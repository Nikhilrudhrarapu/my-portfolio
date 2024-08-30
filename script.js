// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    var sections = document.querySelectorAll('.section');
    
    // Loop through sections to hide them
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Show the "About" section by default
document.addEventListener("DOMContentLoaded", function() {
    showSection('about');
});
// Initialize EmailJS with your user ID

(function() {
    emailjs.init("nikhilrudrarapu210@gmail.com"); // Replace with your actual EmailJS user ID
})();

// Add form submission event listener
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the email using your specific service and template IDs
    emailjs.sendForm('service_18y9mqx', 'template_y9pwscf', this)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
    });

    // Clear the form
    this.reset();
});
