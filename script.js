function checkPassword() {
  var pass = document.getElementById("password").value;

  if (pass === "1234") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

function openLockedMemory() {
  var pass = prompt("Enter memory password");

  if (pass === "5678") {
    window.location.href = "memories/memory2.html";
  } else {
    alert("Access denied");
  }
}
