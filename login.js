document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if the username and password match the local database
    if (username === '210305105458' && password === '1234') {
      alert('Login successful! Welcome, ' + username);
      // Redirect to another page or perform additional actions upon successful login
    } else {
      alert('Incorrect username or password. Please try again.');
      // Clear the input fields
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  });
  