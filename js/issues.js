// ALLOWS A USER THAT HAS REGISTERED, THEN LOGGED IN, TO ENTER AN ISSUE AND SAVE IT
// TO LOCAL STORAGE, ALSO ALLOWING THEM TO DISPLAY AND REMOVE ANY SAVED ISSUES

const display_issue = document.getElementById('display_issue');
const display_button = document.getElementById('display_button');
const assignee = document.getElementById('assignee');
const issue_desc = document.getElementById('issue_desc');
const issue_form = document.getElementById('issue_form');
const close_button = document.getElementById('close_button');

const issue_storage = JSON.parse(localStorage.getItem('Entry'));// pulls user info from local storage
let issues = localStorage.getItem('Entry') !== null ? issue_storage : [];// pushes issues to an empty array


function logIssue(e){//saves enter issue with user info whom entered it
  e.preventDefault();
  if(assignee.value == '' || issue_desc.value == ''){// alerts for an empty field
    alert('fields cannot be blank');
  }else{
    const issue = {// creates the issue and id with user info
      id: generateID(),
      user: assignee.value,
      issue: issue_desc.value
    };
    console.log(issue);
    issues.push(issue);// pushes each issue to the array
    addIssuesDOM(issue);// adds it to the display window
    updateStorage();// updates local storage with each issue
    assignee.value = '';// clears entry fields after issue addition
    issue_desc.value = '';
  }
}

function generateID(){// generates a random nnumber for the id
return Math.floor(Math.random() *100)
}

function addIssuesDOM(issue){// adds each issue to the display window
  const li = document.createElement('li');
  li.innerHTML = `
  <strong>User:</strong> ${issue.user}
  <button class='delete_button' onclick='removeIssue(${issue.id})'>X</button>
  <br><strong>Issue:</strong> ${issue.issue}
  `;
  display_issue.appendChild(li);
}

function removeIssue(id){// removes each issue by id
  issues = issues.filter(issue => issue.id !== id);
  updateStorage();
  init();
}

function updateStorage(){// updates local storage after addition or removal
  localStorage.setItem('Entry', JSON.stringify(issues));
}

function init(){// initialize app
  display_issue.innerHTML = '';// removal of each issue selected from the display
  issues.forEach(addIssuesDOM);
  updateStorage();
}

init();

issue_form.addEventListener('submit', logIssue);// submit event on button click
