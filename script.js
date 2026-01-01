// ---- MAIN LOGIN ----
function checkPassword() {
  var pass = document.getElementById("password").value;

  if (pass === "1234") {
    sessionStorage.setItem("loggedIn", "yes");
    showContent();
  } else {
    alert("Wrong password");
  }
}

function showContent() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
  document.body.classList.remove("fade-out");
}

// ---- OPEN MEMORY WITH ANIMATION ----
function openMemory(url, card) {
  card.classList.add("open");

  setTimeout(() => {
    document.body.classList.add("fade-out");
  }, 150);

  setTimeout(() => {
    window.location.href = url;
  }, 600);
}

// ---- LOCKED MEMORY ----
function openLockedMemoryAnimated(card) {
  var pass = prompt("Enter memory password");

  if (pass === "5678") {
    openMemory("memories/memory2.html", card);
  } else {
    alert("Access denied");
  }
}

// ---- CRITICAL FIX FOR BACK BUTTON ----
window.addEventListener("pageshow", function () {
  document.body.classList.remove("fade-out");

  document.querySelectorAll(".card.open").forEach(card => {
    card.classList.remove("open");
  });

  if (sessionStorage.getItem("loggedIn") === "yes") {
    showContent();
  }
});
