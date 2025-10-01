const users = [];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function getUserInfo(event){
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;
  validateForm(name, email, age)
  console.log(name, email, age)
})


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

}