function checkPassword() {
  var pass = document.getElementById("password").value;

  if (pass === "1234") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

function openMemory(url, card) {
  card.classList.add("open");

  setTimeout(function () {
    document.body.classList.add("fade-out");
  }, 200);

  setTimeout(function () {
    window.location.href = url;
  }, 600);
}

function openLockedMemoryAnimated(card) {
  var pass = prompt("Enter memory password");

  if (pass === "5678") {
    openMemory("memories/memory2.html", card);
  } else {
    alert("Access denied");
  }
}
