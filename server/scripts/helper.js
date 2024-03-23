const username = document.getElementById("username");
const message = document.getElementById("message");

function validate() {
  let isValid = true;

  if (username.value.trim() == "") {
    username.style.borderColor = "red";
    username.placeholder = "username cannot be empty";
    username.value = "";
    isValid = false;
  }

  if (message.value.trim() == "") {
    message.style.borderColor = "red";
    message.placeholder = "message cannot be empty";
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
