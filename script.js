function checkPassword() {
  var pass = document.getElementById("password").value;

  if (pass === "1234") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("Wrong password");
  }
}
