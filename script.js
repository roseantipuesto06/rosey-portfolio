
// ============================
// ROSEY PERSONAL PORTFOLIO
// JAVASCRIPT FUNCTIONS
// ============================


// 1. CALCULATE AGE AUTOMATICALLY

function calculateAge() {

    const birthday = new Date(2006, 10, 29);

    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    const birthdayNotReached =
        today.getMonth() < birthday.getMonth() ||
        (
            today.getMonth() === birthday.getMonth() &&
            today.getDate() < birthday.getDate()
        );

    if (birthdayNotReached) {
        age--;
    }

    document.getElementById("homeAge").textContent = age;

    document.getElementById("aboutAge").textContent =
        age + " years old";

}


// 2. SWITCH BETWEEN WEBSITE TABS

function showTab(tabName, button) {

    // Select all website sections
    const pages = document.querySelectorAll(".page");

    // Hide all sections
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show the selected section
    document.getElementById(tabName).classList.add("active");

    // Select all navigation buttons
    const buttons = document.querySelectorAll(".nav-btn");

    // Remove the active design from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Highlight the selected navigation button
    if (button) {

        button.classList.add("active");

    } else {

        // Identify the correct navigation button
        const tabButtons = {
            home: 0,
            about: 1,
            projects: 2,
            blog: 3,
            contact: 4
        };

        buttons[tabButtons[tabName]].classList.add("active");

    }

    // Scroll to the top after changing tabs
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// 3. AUTOMATIC FOOTER YEAR

function updateYear() {

    const currentYear = new Date().getFullYear();

    document.getElementById("year").textContent =
        currentYear;

}


// 4. INITIALIZE WEBSITE FUNCTIONS

calculateAge();

updateYear();
