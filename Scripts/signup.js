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
      document.getElementById('otpVerification').style.display = 'block';
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
  });
  