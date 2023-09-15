// Initialize Firebase with your project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvqIQSyaqABPuJdAoOdKlMD6DgI6Bmvro",
    authDomain: "propose-2.firebaseapp.com",
    projectId: "propose-2",
    storageBucket: "propose-2.appspot.com",
    messagingSenderId: "803133158457",
    appId: "1:803133158457:web:fcd86dc36727e96a89c9e8",
    measurementId: "G-1ZCG69EKVP"
  };

firebase.initializeApp(firebaseConfig);

// Get references to DOM elements
const heart = document.getElementById('heart');
const modal = document.getElementById('myModal');
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
const message = document.querySelector('.message');

// Event listener for the heart symbol
heart.addEventListener('click', function () {
    // Display the modal on heart click
    modal.style.display = 'block';
});

// Event listener for the "Yes, I will" button
acceptBtn.addEventListener('click', function () {
    // Update the message and disable further clicks
    message.textContent = "You've made me the happiest person in the world! 💍";
    heart.style.pointerEvents = 'none';
    // Send "Yes, I will" response to Firebase
    sendResponse("Yes, I will");
    // Close the modal
    modal.style.display = 'none';
});

// Event listener for the "I need to think about it" button
declineBtn.addEventListener('click', function () {
    // Close the modal
    modal.style.display = 'none';
    // Send "I need to think about it" response to Firebase
    sendResponse("I need to think about it");
});

// Function to send response to Firebase
function sendResponse(response) {
    const database = firebase.database();
    const responsesRef = database.ref('responses');
    
    // Push the response to the database
    responsesRef.push().set({
        response: response,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

//link
console.log('Firebase Linked')
console.log('https protocol and cors api connected');
console.log('https protocol and cors api connected');
console.log('Made By @itz._thejas')
