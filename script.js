document.addEventListener("DOMContentLoaded", function () {
    // Preloader
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);

    // Hamburger Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function () {
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-350px";
        } else {
            sidebar.style.right = "0px";
        }
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Tilt Effect
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });

    // Contact Form Submission
    document.querySelector(".contact form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });
});
