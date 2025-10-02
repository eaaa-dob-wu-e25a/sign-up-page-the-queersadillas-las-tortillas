const users = [];

const form = document.getElementById("signup-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function getUserInfo(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = Number(document.getElementById("age").value);
  validateForm(name, email, age);
});

// searchInput.addEventListener('input', function() {

// });

function renderUsers() {
  let displayList = document.getElementById("user-list");

  let ul = displayList.querySelector("ul");
  if (!ul) {
    ul = document.createElement("ul");
    displayList.appendChild(ul);
  }
  ul.innerHTML = ""

  for (let [index, user] of users.entries()) {
    let li = document.createElement("li");
    li.innerHTML =
      "<b>Name:</b> " +
      user.firstName +
      ", <b>Email:</b> " +
      user.emailAdress +
      ", <b>Age:</b> " +
      user.numberAge;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
      users.splice(index, 1); // remove from array
      renderUsers();          // refresh list
    });

    li.appendChild(removeBtn);
    ul.appendChild(li);
  }
}

function validateForm(name, email, age) {
  if (name === "" || email === "" || age === "") {
    errorMessage.textContent = "Make sure your fields are not empty";
  }
  else if (age > 120 || age < 1) {
    errorMessage.textContent = "You need to enter a number between 1 and 120";
  }
  else if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "You need to enter a valid email";
  } else {
    let user = { firstName: name, emailAdress: email, numberAge: age };
    users.push(user);
    renderUsers();
  }
}

function clearForm() {}

function editUser(index) {}
