
// ------------------------------------------
// WHATSAPP
// ------------------------------------------

function openWhatsApp(message) {

    const phone = "27813460090";

    const defaultMessage =
        "Hi Lelosandi Properties, I would like to enquire about your property services.";

    const finalMessage = message || defaultMessage;

    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(finalMessage);

    window.location.href = whatsappURL;
}

// ------------------------------------------
// SCROLL TO SERVICES
// ------------------------------------------

function scrollToServices() {

    const servicesSection =
        document.getElementById("services");

    if (servicesSection) {

        servicesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}

// ------------------------------------------
// SERVICE DATA
// ------------------------------------------

const serviceData = {

    buy: {
        title: "Buy a Property",
        description:
            "Tell us what you're looking for and Lelosandi Properties can assist you with your property search.",
        message:
            "Hi Lelosandi Properties, I am interested in buying a property. I would like assistance."
    },

    rent: {
        title: "Rent a Property",
        description:
            "Looking for a place to rent? Tell us what you need and start your rental enquiry.",
        message:
            "Hi Lelosandi Properties, I am interested in renting a property. I would like assistance."
    },

  },

    loan: {
        title: "Home Loan Assistance",
        description:
            "Need assistance understanding your home-finance options? Start a home-loan enquiry.",
        message:
            "Hi Lelosandi Properties, I would like assistance with a home loan enquiry."
    },

    evaluation: {
        title: "Property Evaluation",
        description:
            "Would you like assistance with understanding your property's value? Start an evaluation enquiry.",
        message:
            "Hi Lelosandi Properties, I would like to enquire about a property evaluation."
    },

  flisp: {
        title: "FLISP Assistance",
        description:
            "Find out more about FLISP and get assistance understanding the application process.",
        message:
            "Hi Lelosandi Properties, I would like more information about FLISP assistance."
    },

    contact: {
        title: "Speak to Lelosandi",
        description:
            "Have a question? Send Lelosandi Properties a message directly on WhatsApp.",
        message:
            "Hi Lelosandi Properties, I would like to speak to someone about a property enquiry."
    }

};

function openService(serviceName) {

    const modal =
        document.getElementById("serviceModal");

    const formContent =
        document.getElementById("formContent");

    const service =
        serviceData[serviceName];

    if (!modal || !formContent || !service) {

        console.error(
            "Lelosandi service error:",
            serviceName
        );

        return;

    }

formContent.innerHTML = `

        <span class="section-label">
            LELOSANDI PROPERTIES
        </span>

        <h2 class="form-title">
            ${service.title}
        </h2>

        <p class="form-description">
            ${service.description}
        </p>

        <div class="form-group">

            <label class="form-label">
                Your name
            </label>

            <input
                class="form-input"
                id="leadName"
                type="text"
                placeholder="Enter your name"
            >

        </div>


        <div class="form-group">

            <label class="form-label">
                What do you need?
            </label>

            <input
                class="form-input"
                id="leadDetails"
                type="text"
                placeholder="Tell us what you're looking for"
            >

        </div>

        <div class="form-group">

            <label class="form-label">
                Your phone number
            </label>

            <input
                class="form-input"
                id="leadPhone"
                type="tel"
                placeholder="Enter your phone number"
            >

        </div>

        <button
            class="whatsapp-submit"
            type="button"
            onclick="submitService('${serviceName}')"
        >
            Continue on WhatsApp →
        </button>

    `;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}

// ------------------------------------------
// SUBMIT SERVICE
// ------------------------------------------

function submitService(serviceName) {

    const service =
        serviceData[serviceName];

    if (!service) {
        return;
    }


    const name =
        document.getElementById("leadName")?.value.trim() || "";

    const details =
        document.getElementById("leadDetails")?.value.trim() || "";

    const phone =
        document.getElementById("leadPhone")?.value.trim() || "";

let message =
        service.message;


    if (name) {

        message +=
            "\n\nName: " +
            name;

    }

if (phone) {

        message +=
            "\nPhone: " +
            phone;

    }


    if (details) {

        message +=
            "\nRequirement: " +
            details;

    }

}


    closeService();

    openWhatsApp(message);

}

// ------------------------------------------
// CLOSE SERVICE
// ------------------------------------------

function closeService() {

    const modal =
        document.getElementById("serviceModal");

    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

document.body.style.overflow = "";

}

// ------------------------------------------
// ESC KEY
// ------------------------------------------

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeService();

        }

    }
);

// ------------------------------------------
// STOP MODAL BOX FROM CLOSING MODAL
// ------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const modalBox =
            document.querySelector(".modal-box");

        if (modalBox) {

            modalBox.addEventListener(
                "click",
                function(event) {

                    event.stopPropagation();

              }
            );

        }

    }
);

// ------------------------------------------
// PAGE LOADED
// ------------------------------------------

console.log(
    "Lelosandi Properties JavaScript loaded."
);
