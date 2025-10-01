const users = [];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search');

form.addEventListener('submit', getUserInfo(submitEvent));

// This function only runs when the form is submitted
function getUserInfo(event){
  event.preventDefault(); // Prevents the page from getting reloaded by the submit call
  // First task: assign the proper values to these variables
  let name = ???
  let email = ???
  let age = ???
  validateForm(name, email, age)
}

searchInput.addEventListener('input', function() {

});


function renderUsers(filteredUsers = users) {

}

function validateForm(name, email, age) {
  //

}

function clearForm() {

}

function editUser(index) {

//commented out for now
//   document.getElementById('name').value = users[index].name;
//   document.getElementById('email').value = users[index].email;
//   document.getElementById('age').value = users[index].age;
//   users.splice(index, 1);
//   renderUsers();
}