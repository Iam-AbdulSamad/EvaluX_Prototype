const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul"); // Selecting the nav list

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

// Get total visitors from localStorage
let totalVisitors = localStorage.getItem("totalVisitors") || 0;
let registeredUsers = localStorage.getItem("registeredUsers") || 0;

// Increase the visitor count on first visit
if (!sessionStorage.getItem("visited")) {
    totalVisitors++;
    localStorage.setItem("totalVisitors", totalVisitors);
    sessionStorage.setItem("visited", "true");
}

// Function to register a new user
function registerUser() {
    registeredUsers++;
    localStorage.setItem("registeredUsers", registeredUsers);
    document.getElementById("registered-users").textContent = registeredUsers;
}

// Display the counters
document.getElementById("total-visitors").textContent = totalVisitors;
document.getElementById("registered-users").textContent = registeredUsers;
// Function to toggle FAQ answers
function toggleFAQ(element) {
    let answer = element.nextElementSibling;
    let icon = element.querySelector('.faq-icon');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.classList.remove("rotate");
    } else {
        answer.style.display = "block";
        icon.classList.add("rotate");
    }
}