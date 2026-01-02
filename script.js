function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "1234") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

function openMemory(url, card) {
  card.classList.add("open");
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

function openLockedMemory(card) {
  const pass = prompt("Enter memory password");

  if (pass === "5678") {
    openMemory("memories/memory2.html", card);
  } else if (pass !== null) {
    alert("Access denied");
  }
}
