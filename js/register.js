// REGISTERS AND ADDS USER ENTERED INFORMATION TO LOCAL STORAGE

function registerUser(){

  const register_form = document.getElementById('register_form');
  const user_name = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password_2 = document.getElementById('password_2').value;

  const user_info = {// creates user info into an object
    user: user_name,
    pw: password
  };

  if(password != password_2){// checks if passwords match
    alert('Those passwords do not match.');
    return false;
  }else if(password === password_2){// if they match, open the login window and save info to local storage
    window.location.href = 'login.html';
    localStorage.setItem(user_name, password);
    return false;
  }
}
register_form.addEventListener('submit', function(e){// adds event on click
  e.preventDefault();
  registerUser();
});
