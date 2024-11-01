document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default page load

          const targetPage = link.getAttribute("href");
          if (targetPage) {
              loadPage(targetPage);
          }
      });
  });
});

function loadPage(page) {
  fetch(page)
      .then(response => response.text())
      .then(html => {
          document.body.innerHTML = html;
          history.pushState(null, '', page); // Update URL without reloading
          attachNavEventListeners(); // Reattach listeners after page load
      })
      .catch(error => console.error("Error loading page:", error));
}

function attachNavEventListeners() {
  // Reattach the navigation event listeners after loading new content
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetPage = link.getAttribute("href");
          if (targetPage) {
              loadPage(targetPage);
          }
      });
  });
}
