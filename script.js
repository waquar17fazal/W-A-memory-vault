function checkPassword() {
  var pass = document.getElementById("password").value;

  if (pass === "1234") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
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
