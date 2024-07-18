// JavaScript for slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById('service').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue !== "blankspace") {
        window.location.href = selectedValue;
    }
});

document.getElementById('signin').addEventListener('click', function() {
    window.location.href = 'signin.html';
});

document.getElementById('returns-orders').addEventListener('click', function() {
    window.location.href = 'yourorders.html';
});

// Function to save pickup details to localStorage
function savePickupDetails(details) {
    let savedDetails = JSON.parse(localStorage.getItem('pickupDetails')) || [];
    savedDetails.push(details);
    localStorage.setItem('pickupDetails', JSON.stringify(savedDetails));
}

// Function to handle scheduling a pickup and saving details
function schedulePickup() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location1 = document.getElementById('location1').value;
    const location2 = document.getElementById('location2').value;

    // Create an object with pickup details
    const pickupDetails = {
        name: name,
        phone: phone,
        email: email,
        location1: location1,
        location2: location2
    };

    // Save details to localStorage
    savePickupDetails(pickupDetails);

    // Redirect to yourorders.html after saving
    window.location.href = 'yourorders.html';
}

// Event listener for the Schedule a Pickup button
document.getElementById('schedule-pickup-btn').addEventListener('click', schedulePickup);
