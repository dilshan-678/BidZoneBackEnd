function userSignUp() {
  const form = document.getElementById('signupForm');
  const userName = form.username.value.trim();
  const password = form.password.value.trim();
  const firstName = form.firstname.value.trim();
  const lastName = form.lastname.value.trim();
  const email=form.useremail.value;
  console.log(email)

  if (!userName || !password || !firstName || !lastName) {
    alert('Please fill in all fields.');
    return;
  }

  if (password.length < 8 || password.length > 10) {
    alert('Password must be between 8 and 10 characters long.');
    return; // Stop execution if password length is not valid
  }

    if (!validateEmail(email)) {
        alert('Invalid email address.');
        return;
    }
  const userData = {
    userName: userName,
    password: password,
    firstName: firstName,
    lastName: lastName,
      email:email
  };

  fetch('http://localhost:8080/auctionappBidZone/registerUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
      .then(async response => {
        if (!response.ok) {
        }
        return response.text();
      })
      .then(data => {
        alert(data);
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to register user');
      });
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

 function userLogin() {
  const form = document.getElementById('loginForm');
  const username = form.username2.value.trim();
  const password = form.password2.value.trim();

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  const loginData = {
    username: username,
    password: password
  };

  fetch('http://localhost:8080/auctionappBidZone/userlogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
      .then(response => {
        if (!response.ok) {
          form.reset();
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Login failed. Please check your username and password.');
          });
        }
        form.reset();
        return response.json();
      })
      .then( data => {
        console.log('User data:', data);
        localStorage.setItem('username', data.username);
        form.reset();
        window.location.href = 'dashboard.html';
      })
      .catch(error => {
        alert(error.message);
      });
}



