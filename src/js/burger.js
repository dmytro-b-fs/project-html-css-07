document.querySelectorAll(".mobile-menu-btn, .navbar-btn-close").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelector(".menu-overlay").classList.toggle("is-open");
        if (document.querySelector(".menu-overlay.is-open")) {
            document.querySelector(".mobile-menu-btn").style.visibility = "hidden";
            document.querySelector(".order-btn").style.visibility = "hidden";
        }
        else {
            document.querySelector(".mobile-menu-btn").style.visibility = "visible";
            document.querySelector(".order-btn").style.visibility = "visible";
        }
    });
});