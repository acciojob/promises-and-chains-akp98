//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get user input
  const age = document.getElementById('age').value;
  const name = document.getElementById('name').value;

  // Check if inputs are empty
  if (!age || !name) {
    alert('Please fill out all fields.');
    return;
  }

  // Call the function to process the form and handle promises
  handleFormSubmission(age, name);
});

// Function to handle form submission and use promises
function handleFormSubmission(age, name) {
  // Create a promise that resolves or rejects based on age
  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(name); // Resolve promise with the name if age is above 18
      } else {
        reject(name); // Reject promise with the name if age is below 18
      }
    }, 4000); // Wait for 4 seconds before resolving or rejecting
  });

  // Handle the promise result
  ageCheckPromise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
}
