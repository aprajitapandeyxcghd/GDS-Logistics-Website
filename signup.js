document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Example of saving data (you would typically send this data to a server)
        const userData = {
            name: name,
            email: email,
            phone: phone,
            address: address
        };

        // Here you can perform AJAX fetch or send data to backend for account creation
        // For demonstration, we'll simply log the user data
        console.log('User Data:', userData);

        // Optionally, redirect to a success page or update UI
        alert('Account created successfully!'); // Replace with actual UI update

        // Clear form fields
        signupForm.reset();
    });
});
