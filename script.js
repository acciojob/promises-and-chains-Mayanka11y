//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.createElement("form");
  
  // Create input fields
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.placeholder = "Enter your name";

  const ageInput = document.createElement("input");
  ageInput.type = "number";
  ageInput.id = "age";
  ageInput.placeholder = "Enter your age";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "btn";
  submitButton.textContent = "Submit";

  // Append elements to the form
  form.appendChild(nameInput);
  form.appendChild(ageInput);
  form.appendChild(submitButton);
  document.body.appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim(), 10);

    if (!name || isNaN(age)) {
      alert("Please enter valid details.");
      return;
    }

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    })
      .then((message) => alert(message))
      .catch((error) => alert(error));
  });
});