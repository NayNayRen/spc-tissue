// VERIFIES LOGIN INFORMATION

  function loginForm(){

    const login_form = document.getElementById('login_form');
    const user_name = document.getElementById('email').value;
    const user_pw = document.getElementById('password').value;
    const admin = 'admin@tissue.com';// if either of these 2 users info is entered, defers login to the graph
    const admin_pw = 'admin123';
    //const user_1 = 'adrian@tissue.com';
    //const user_1_pw = 'welcome1';

    const saved_pw = localStorage.getItem(user_name);// gets users info from local storage
    console.log(saved_pw);

     if(user_pw == saved_pw && user_name != admin){// checks password against saved info and opens issue page
      window.location.href = 'issues.html';
      return false;
    }else if(user_name == admin && user_pw == admin_pw){// opens graph page if admins info used
      window.location.href = 'subscription-dashboard.html';
      return false;
    }else{
      alert('Your entries do not match our records.');
      return false;
    }
  }
  login_form.addEventListener('submit', function(e){// adds event on click
    e.preventDefault();
    loginForm();
  });
