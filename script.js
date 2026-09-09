
document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // SERVICE MODAL
    // ==============================

    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const closeModal = document.querySelector(".close-modal");

    const serviceInfo = {
        buy: {
            title: "Buy a Property",
            text: "Looking for your next home or investment property? Lelosandi Properties can help you find a property that matches your needs and budget."
        },

      rent: {
            title: "Rent a Property",
            text: "Find a place that feels like home. Tell Lelosandi Properties what you are looking for and get assistance finding suitable rental opportunities."
        },

        loan: {
            title: "Home Loan Assistance",
            text: "Need help understanding the home-loan process? Lelosandi Properties can guide you through the steps and help you understand your options."
        },

        evaluation: {
            title: "Property Evaluation",
            text: "Want to understand what your property may be worth? Speak to Lelosandi Properties about a property evaluation."
        },

        flisp: {
            title: "FLISP Assistance",
            text: "Lelosandi Properties can help you understand whether you may qualify for housing assistance through the FLISP programme and guide you through the process."
        }
    };

                // Open service modal
    document.querySelectorAll("[data-service]").forEach(button => {

        button.addEventListener("click", () => {

            const service = button.dataset.service;

            if (!serviceInfo[service]) {
                return;
            }

            modalTitle.textContent = serviceInfo[service].title;
            modalText.textContent = serviceInfo[service].text;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";
        });

    });

                 // Close modal
    if (closeModal) {

        closeModal.addEventListener("click", () => {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        });

    }

             // Close modal when clicking outside
    if (modal) {

        modal.addEventListener("click", event => {

            if (event.target === modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    }

  // Close modal with ESC
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

            // ==============================
    // SMOOTH SCROLL
    // ==============================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

             const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

           // ==============================
    // REVEAL ANIMATION
    // ==============================

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

      {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

            // ==============================
    // WHATSAPP BUTTONS
    // ==============================

    const whatsappNumber = "27813460090";

    document.querySelectorAll("[data-whatsapp]").forEach(button => {

        button.addEventListener("click", () => {

            const message =
                button.dataset.message ||
                "Hi Lelosandi Properties, I would like to enquire about your property services.";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");

        });

    });

              // ==============================
    // CURRENT YEAR
    // ==============================

    const yearElements = document.querySelectorAll("[data-year]");

    yearElements.forEach(element => {

        element.textContent = new Date().getFullYear();

    });

            // ==============================
    // MOBILE MENU
    // ==============================

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("open");

            menuButton.classList.toggle("active");

        });

  navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                menuButton.classList.remove("active");

            });

        });

    }

});

