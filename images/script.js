// =========================
// ANNIVERSARY WEBSITE
// Little animations & effects
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------
    // Scroll reveal animation
    // -------------------------

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });


    // -------------------------
    // Smooth memory button
    // -------------------------

    const memoryButton = document.querySelector(".memory-button");

    if (memoryButton) {

        memoryButton.addEventListener("click", (event) => {

            event.preventDefault();

            const target = document.querySelector("#journey");

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    }


    // -------------------------
    // Small floating stars
    // -------------------------

    const starsContainer = document.querySelector(".stars");

    if (starsContainer) {

        for (let i = 0; i < 25; i++) {

            const star = document.createElement("span");

            star.classList.add("floating-star");

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            star.style.animationDelay =
                Math.random() * 5 + "s";

            starsContainer.appendChild(star);

        }

    }

});
