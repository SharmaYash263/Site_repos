document.addEventListener("DOMContentLoaded", function () {
    // Get the banner image
    const bannerImage = document.body.getAttribute("data-banner") || "images/banners/banner.jpg";

    const header = document.createElement("header");
    header.innerHTML = `
        <div class="banner" style="background: url('${bannerImage}') no-repeat center center/cover;">
            <div class="profile-container">
                <img src="images/profiles/Headshot.jpg" alt="Yash Sharma" class="profile-pic">
                <h1>Yash Sharma</h1>
                <h2>Austin Based Programmer And Artist</h2>
            </div>
        </div>
        <nav>
            <button class="menu-toggle">☰</button>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="art_page.html">Arts and Media</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    // Insert the header
    document.body.insertBefore(header, document.body.firstChild);

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
