document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarList = document.querySelector(".navbar-list");
  const navLinks = document.querySelectorAll('.navbar-list a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default behavior
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Check if the target section is already expanded
      if (targetSection.classList.contains('expanded')) {
        // Collapse the section
        targetSection.classList.remove('expanded');
        sections.forEach(section => section.style.display = 'block'); // Show all sections
      } else {
        // Expand the target section
        sections.forEach(section => {
          section.classList.remove('expanded');
          section.style.display = 'none'; // Hide all sections
        });
        targetSection.style.display = 'block'; // Show and expand the target section
        targetSection.classList.add('expanded');
      }
    });
  });

  // Toggle the mobile navigation menu
  toggleButton.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });

  // Accordion functionality
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const isOpen = header.getAttribute("aria-expanded") === "true";

      // Close all accordion items
      accordionHeaders.forEach((h) => {
        h.setAttribute("aria-expanded", "false");
        h.nextElementSibling.style.display = "none";
        h.querySelector("i").style.transform = "rotate(0deg)"; // Reset arrow
      });

      // Toggle clicked item
      if (!isOpen) {
        header.setAttribute("aria-expanded", "true");
        header.nextElementSibling.style.display = "block";
        header.querySelector("i").style.transform = "rotate(90deg)"; // Rotate arrow
      }
    });
  });
});
