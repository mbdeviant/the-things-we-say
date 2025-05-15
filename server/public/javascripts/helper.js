const username = document.getElementById("username");
const message = document.getElementById("message");

function validate() {
  let isValid = true;

  if (username.value.trim() == "") {
    username.style.borderColor = "red";
    username.placeholder = "Required";
    username.value = "";
    isValid = false;
  }

  if (message.value.trim() == "") {
    message.style.borderColor = "red";
    message.placeholder = "Required";
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

document.querySelectorAll(".message-date").forEach((el) => {
  const rawDate = el.getAttribute("data-time");
  const date = new Date(rawDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  const formatted = `${day}.${month}.${year} - ${hour}:${minute}`;

  el.innerHTML = `<p aria-label="post date">${formatted}</p>`;
});
