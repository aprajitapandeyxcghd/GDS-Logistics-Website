function schedulePickup() {
    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var location1 = document.getElementById('location1').value;
    var location2 = document.getElementById('location2').value;

    // Create an object with pickup details
    var pickupDetails = {
        name: name,
        phone: phone,
        email: email,
        location1: location1,
        location2: location2
    };

    // Save details to localStorage
    localStorage.setItem('pickupDetails', JSON.stringify(pickupDetails));

    // Alert and confirmation message (optional)
    alert("Your pickup has been scheduled successfully!\n\nDetails:\nName: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nFrom: " + location1 + "\nTo: " + location2);

    // Show confirmation message on the page
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
}
