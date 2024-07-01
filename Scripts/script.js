// app.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const otpForm = document.getElementById('otpForm');
  
    // Function to send OTP
    window.sendOtp = function() {
      const phone = document.getElementById('signupPhone').value;
      const password = document.getElementById('signupPassword').value;
      const reenterPassword = document.getElementById('reenterPassword').value;
  
      if (password !== reenterPassword) {
        alert('Passwords do not match!');
        return;
      }
  
      // Mock OTP send
      console.log('OTP sent to', phone);
  
      // Show OTP form
      document.getElementById('signup').style.display = 'none';
      document.getElementById('otpSection').style.display = 'block';
    };
  
    otpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const otp = document.getElementById('otpCode').value;
  
      // Mock OTP verification
      if (otp === '123456') { // This is a mock check; in real applications, verify OTP from backend
        console.log('OTP verified');
        
        // Redirect to login page
        window.location.href = 'login.html'; // Change 'login.html' to the actual login page URL
      } else {
        alert('Invalid OTP');
      }
    });
  
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const phone = document.getElementById('loginPhone').value;
      const password = document.getElementById('loginPassword').value;
  
      // Mock login process
      console.log('Logged in with', phone);
  
      alert('Login successful');
    });
  });

  // app.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#login form');
    const profileSetupForm = document.querySelector('#profile-setup form');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your signup logic here
      alert('Sign up form submitted');
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your login logic here
      alert('Login form submitted');
    });
  
    profileSetupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your profile setup logic here
      alert('Profile setup form submitted');
    });
  });
  
  