// Function to toggle the mobile menu
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// Add event listener to close menu when a link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});