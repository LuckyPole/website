
"use strict";

// 1. Automatically update the copyright year
const yearElement = document.getElementById("currentYear");

yearElement.textContent = new Date().getFullYear();


// 2. Control the mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});


// 3. Close the mobile menu after selecting a link
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});


// 4. Validate the contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear the previous message
    formStatus.textContent = "";
    formStatus.style.color = "";

    // Check the entered information
    if (
        name.length < 2 ||
        !email ||
        !subject ||
        message.length < 10
    ) {
        formStatus.textContent =
            "Please complete all fields. Your name must contain at least 2 characters, and your message at least 10 characters.";

        formStatus.style.color = "#b91c1c";
        return;
    }

    // Show a demonstration confirmation
    formStatus.textContent =
        "Thank you, " + name +
        "! Your form has been validated successfully. " +
        "Please note: your message has not been sent.";

    formStatus.style.color = "#166534";

    // Reset the form after successful validation
    contactForm.reset();
});