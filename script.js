function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "1234") {
    sessionStorage.setItem("loggedIn", "yes");
    showMain();
  } else {
    alert("Wrong password");
  }
}

function showMain() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");

  // 🔧 IMPORTANT: remove fade overlay if present
  document.body.classList.remove("fade-out");
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

/* =========================
   🔑 BACK BUTTON FIX (CRITICAL)
========================= */
window.addEventListener("pageshow", function () {
  // Remove black overlay
  document.body.classList.remove("fade-out");

  // Restore main screen if already logged in
  if (sessionStorage.getItem("loggedIn") === "yes") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  }
});
