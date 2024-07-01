// app.js

document.addEventListener('DOMContentLoaded', function() {
    const profileDetailsContainer = document.getElementById('profile-details');
  
    // Function to display profile details
    function displayProfileDetails(profile) {
      profileDetailsContainer.innerHTML = `
        <h2>${profile.name.first} ${profile.name.last}</h2>
        <p>Email: ${profile.email}</p>
        <p>Location: ${profile.location.city}, ${profile.location.country}</p>
        <!-- Add more profile details as needed -->
      `;
    }
  
    // Check if there is a query parameter 'id'
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = urlParams.get('id');
  
    if (profileId) {
      // Fetch profile details using profileId (you can fetch from API or use dummy data)
      fetch(`https://randomuser.me/api/?results=1&seed=${profileId}`)
        .then(response => response.json())
        .then(data => {
          const profile = data.results[0];
          displayProfileDetails(profile);
        })
        .catch(error => {
          console.error('Error fetching profile details:', error);
        });
    } else {
      // If no profileId is provided, show an error message
      profileDetailsContainer.innerHTML = '<p>Error: No profile ID provided</p>';
    }
  });
  