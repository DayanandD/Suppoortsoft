document.addEventListener('DOMContentLoaded', function() {
    const profilesContainer = document.getElementById('profilesContainer');
    let profiles = []; // Array to store fetched profiles
    let likedProfiles = []; // Array to store liked profiles
    let likeCount = 0; // Counter for likes
  
    // Fetch dummy data from the Random User Generator API
    fetch('https://randomuser.me/api/?results=10&nat=IN&gender=female&age=20-40')
      .then(response => response.json())
      .then(data => {
        profiles = data.results;
        displayProfiles(profiles);
      });
  
    // Function to display profiles
    function displayProfiles() {
      profilesContainer.innerHTML = '';
      profiles.forEach((profile, index) => {
        const profileCard = document.createElement('div');
        profileCard.className = 'col-lg-4 mb-4';
        profileCard.innerHTML = `
          <div class="card">
            <img src="${profile.picture.large}" class="card-img-top" alt="${profile.name.first}">
            <div class="card-body">
              <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
              <p class="card-text">Age: ${profile.dob.age}</p>
              <p class="card-text">Location: ${profile.location.city}, ${profile.location.country}</p>
              <p class="card-text">Hobbies: ${getRandomHobbies()}</p>
              <p class="card-text">Interest: ${getRandomInterests()}</p>
              <p class="card-text">Status: ${getRandomStatus()}</p>
              <button class="btn btn-success" onclick="likeProfile(${index})">Like</button>
              <button class="btn btn-danger" onclick="dislikeProfile(${index})">Dislike</button>
            </div>
          </div>
        `;
        profilesContainer.appendChild(profileCard);
      });
    }
  
    // Function to handle like operation
    window.likeProfile = function(index) {
      likedProfiles.push(profiles[index]); // Add liked profile to the array
      likeCount++; // Increment like counter
      updateNotification(); // Update notification on the navigation bar
      alert(`Liked profile ${index + 1}`);
      // Additional like functionality can be implemented here
    };
  
    // Function to update notification on the navigation bar
    function updateNotification() {
      const notificationBadge = document.getElementById('notificationBadge');
      notificationBadge.innerText = likeCount;
      updateLikedProfilesList();
    }
  
    // Function to update the list of liked profiles
    function updateLikedProfilesList() {
      const likedProfilesList = document.getElementById('likedProfilesList');
      likedProfilesList.innerHTML = '';
      likedProfiles.forEach(profile => {
        const listItem = document.createElement('li');
        listItem.innerText = `${profile.name.first} ${profile.name.last}`;
        likedProfilesList.appendChild(listItem);
      });
    }
  

    window.dislikeProfile = function(index) {
      profiles.splice(index, 1); // Remove disliked profile from the array
      displayProfiles(); // Display the next profile
    };
  
    // Function to toggle visibility of liked profiles list
    document.getElementById('notificationBadge').addEventListener('click', function() {
      const likedProfilesList = document.getElementById('likedProfilesList');
      likedProfilesList.classList.toggle('show');
    });

    // Function to generate random hobbies
    function getRandomHobbies() {
      const hobbies = ['Reading', 'Cooking', 'Traveling', 'Hiking', 'Photography', 'Painting', 'Yoga'];
      const randomIndex = Math.floor(Math.random() * hobbies.length);
      return hobbies[randomIndex];
    }

    // Function to generate random interests
    function getRandomInterests() {
      const interests = ['Music', 'Movies', 'Sports', 'Technology', 'Fashion', 'Food', 'Fitness'];
      const randomIndex = Math.floor(Math.random() * interests.length);
      return interests[randomIndex];
    }

    // Function to generate random status
    function getRandomStatus() {
      const statuses = ['Single', 'In a relationship', 'Complicated'];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      return statuses[randomIndex];
    }
  });
