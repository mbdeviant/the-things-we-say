const username = document.getElementById("username");
const message = document.getElementById("message");

function validate() {
  let isValid = true;

  if (username.value.trim() == "") {
    username.style.borderColor = "red";
    username.placeholder = "this field is required";
    username.value = "";
    isValid = false;
  }

  if (message.value.trim() == "") {
    message.style.borderColor = "red";
    message.placeholder = "this field is required";
    isValid = false;
  }
  return isValid;
}

function usernameInput() {
  username.style.borderColor = "gray";
  username.placeholder = "username";
}
function messageInput() {
  message.style.borderColor = "gray";
  message.placeholder = "type your message..";
}
