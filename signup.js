const users = [];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function getUserInfo(event){
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;
  validateForm(name, email, age)
  
})


// searchInput.addEventListener('input', function() {

// });


function renderUsers(filteredUsers = users) {

}

function validateForm(name, email, age) {
  //
  console.log(name.value, email, age);
if (name === '' || email === '' || age === '') { 
  errorMessage.textContent = 'Make sure your fields are not empty'
}
if (age >120 || age <1) {
  errorMessage.textContent = "You need to enter a number between 1 and 120"
}
if (!email.textContent.includes('@')) {
  errorMessage.textContent = "You need to enter a valid email"
}

}

function clearForm() {

}

function editUser(index) {

}