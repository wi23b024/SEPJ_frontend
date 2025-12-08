// logout.js

function deleteAuthCookie() {
  document.cookie = "auth=; max-age=0; path=/";
}

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    deleteAuthCookie();

    // optional: kleine Verzögerung für UX
    window.location.href = "login.html";
  });
});
