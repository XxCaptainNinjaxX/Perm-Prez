document.addEventListener("DOMContentLoaded", function () {
  let toggleButton = document.getElementById("sidebarToggle");
  let sidebar = document.getElementById("sidebar");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("closed");
  });
});
