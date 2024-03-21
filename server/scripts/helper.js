function validate() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();

  if (username == "" || message == "") {
    alert("Username and message cannot be blank!");
    return false;
  }
  return true;
}
