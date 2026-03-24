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

if (window.matchMedia("(max-width: 375px)").matches) {
    document.querySelectorAll(".menu-nav-link").forEach(ref => {
        ref.addEventListener("click", function() {
            document.querySelector(".menu-overlay").classList.remove("is-open");
            document.querySelector(".mobile-menu-btn").style.visibility = "visible";
            document.querySelector(".order-btn").style.visibility = "visible";
        });
    }); 
};

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 375px)").matches) {
        document.querySelectorAll(".menu-nav-link").forEach(ref => {
            ref.addEventListener("click", function() {
                document.querySelector(".menu-overlay").classList.remove("is-open");
                document.querySelector(".mobile-menu-btn").style.visibility = "visible";
                document.querySelector(".order-btn").style.visibility = "visible";
            });
        }); 
    };
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1440px)").matches) {
        document.querySelector(".order-btn").style.visibility = "visible";
    }
})