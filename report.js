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
