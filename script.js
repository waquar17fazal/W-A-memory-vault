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
  }, 150);

  setTimeout(function () {
    // use normal navigation (NOT replace)
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

/* 🔑 FIX FOR BACK BUTTON (iOS SAFARI) */
window.addEventListener("pageshow", function () {
  // Remove fade overlay
  document.body.classList.remove("fade-out");

  // Reset card animations
  document.querySelectorAll(".card.open").forEach(function (card) {
    card.classList.remove("open");
  });

  // If user already logged in, show content
  if (document.getElementById("content")) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  }
});
