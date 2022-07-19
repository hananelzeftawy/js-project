const submitBtn = document.getElementById("submit");

let firstNameInput = document.getElementById("first-name");
let secondNameInput = document.getElementById("second-name");
let emailInput = document.getElementById("email");
let phoneNumberInput = document.getElementById("phoneNumber");
let messageInput = document.getElementById("message");

let firstNameAlert = document.getElementById("firstNameAlert");
let secondNameAlert = document.getElementById("secondNameAlert");
let emailAlert = document.getElementById("emailAlert");
let phoneNumberAlert = document.getElementById("phoneNumberAlert");
let messageAlert = document.getElementById("messageAlert");
let errorDiv = document.getElementById("error-message");

submitBtn.addEventListener("click", () => {
  let newMessage = {};
  newMessage.firstName = firstNameInput.value;
  newMessage.secondName = secondNameInput.value;
  validateName();
  newMessage.email = validateEmail();
  newMessage.phoneNumber = validatePhoneNumber();
  newMessage.message = validateMessage();

  let validMessage = true;
  for (key in newMessage) if (!newMessage[key]) validMessage = false;
  if (validMessage) {
    console.log(newMessage);
    confirm(
      `Thank you ${newMessage.firstName} ${newMessage.secondName} your message recieved succefully !!`
    );
    reset();
    errorDiv.style.display = "none";
  } else {
    errorDiv.style.display = "block";
  }
});
function validateName() {
  let firstName = firstNameInput.value;
  let secondName = secondNameInput.value;
  if (firstName.length === 0 || /^[a-z A-Z]+$/.test(firstName) === false) {
    firstNameAlert.style.display = "block";
    firstName = "";
    firstNameInput.value = "";
  } else firstNameAlert.style.display = "none";

  if (secondName.length === 0 || /^[a-z A-Z]+$/.test(secondName) === false) {
    secondNameAlert.style.display = "block";
    secondName = "";
    secondNameInput.value="";
  } else secondNameAlert.style.display = "none";
}

function validateEmail() {
  let email = emailInput.value;
  if (!/^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(email))
    emailAlert.style.display = "block";
  else emailAlert.style.display = "none";

  return email;
}

function validatePhoneNumber() {
  let phoneNumber = phoneNumberInput.value;
  if (/^(010|011|012)[0-9]{8}$/.test(phoneNumber) === false) phoneNumberAlert.style.display = "block";
  else phoneNumberAlert.style.display = "none";
  return phoneNumber;
}

function validateMessage() {
  let message = messageInput.value;
  if (message.length === 0) messageAlert.style.display = "block";
  else messageAlert.style.display = "none";

  return message;
}
function reset() {
  firstNameInput.value = "";
  secondNameInput.value = "";
  emailInput.value = "";
  phoneNumberInput.value = "";
  messageInput.value = "";
}
