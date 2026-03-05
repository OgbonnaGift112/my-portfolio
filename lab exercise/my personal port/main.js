/**
 * Main JavaScript for Priestly's Portfolio
 * Features: Active Link Highlighting, Form Validation, and Smooth Scrolling
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log("Main JS Loaded and Ready.");

    // 1. DYNAMIC ACTIVE NAV LINK
    // This automatically highlights the link of the page you are currently on
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // If the link's href matches the current file name, add the 'active' class
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. BOOTSTRAP FORM VALIDATION (Requirement 2.7)
    // This works with the 'needs-validation' class used in your Contact page
    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Custom logic: Alert user on successful submission
                alert("Thank you! Your message has been sent successfully.");
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 3. SMOOTH SCROLLING
    // Adds a professional feel when clicking links that jump to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});