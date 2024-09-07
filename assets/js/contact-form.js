document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });
        
        // Show a success message to the user
        alert('This obviously does not work. Please, reach out to me in linkedin.');
        
        // Clear the form
        form.reset();
    });
});