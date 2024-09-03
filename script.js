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
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // These IDs from the previous steps
    const serviceID = 'service_18y9mqx';
    const templateID = 'template_uygbozb';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('status').innerText = 'Message Sent Successfully!';
        }, (err) => {
            document.getElementById('status').innerText = 'Failed to Send Message. Please Try Again.';
        });
});