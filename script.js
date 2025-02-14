document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");

    //Pages
    const artPages = [
        "art_page.html",
        "all_art.html",
        "acrylic.html",
        "commission.html",
        "digital.html",
        "multi.html",
        "posters.html",
        "realistic.html",
        "watercolor.html"
    ];

    if (artPages.some(page => window.location.pathname.includes(page))) {
        const profilePic = document.querySelector(".profile-pic");

        if (profilePic) {
            const originalSrc = profilePic.src;
            const artPfp = "images/profiles/art_pfp.jpg";

            //Apply fast animation
            profilePic.classList.add("coin-spin");

            // Alternate images during spin
            setTimeout(() => { profilePic.src = artPfp; }, 175);  //First
            setTimeout(() => { profilePic.src = originalSrc; }, 350);  //Switch back
            setTimeout(() => { profilePic.src = artPfp; }, 525);  //Final 

            //Stop spin 
            setTimeout(() => {
                profilePic.src = artPfp; //Final image
                profilePic.classList.remove("coin-spin"); //Stop 
            }, 700);
        }
    }
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
