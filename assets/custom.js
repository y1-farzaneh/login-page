// Get references to the password input and visibility toggle icons
const passwordInput = document.getElementById('password-input');
const showIcon = document.getElementById('show-icon');
const hideIcon = document.getElementById('hide-icon');

// Function to show the password
const showPassword = () => {
   passwordInput.type = 'text';  // Change input type to text to show password
   showIcon.style.display = 'none';  // Hide the show icon
   hideIcon.style.display = 'inline';  // Show the hide icon
};

// Function to hide the password
const hidePassword = () => {
   passwordInput.type = 'password';  // Change input type to password to hide password
   showIcon.style.display = 'inline';  // Show the show icon
   hideIcon.style.display = 'none';  // Hide the hide icon
};

// Add event listeners for the show and hide icons
showIcon.addEventListener('click', showPassword);
hideIcon.addEventListener('click', hidePassword);
