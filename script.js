
// ==========================================
// WHATSAPP
// ==========================================

function openWhatsApp(message) {

    const phone = "27813460090";

    const defaultMessage =
        "Hi Lelosandi Properties, I would like to enquire about your property services.";

    const text = message || defaultMessage;

    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");
}

// ==========================================
// SCROLL TO SERVICES
// ==========================================

function scrollToServices() {

    const services = document.getElementById("services");

    if (services) {

        services.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}

// ==========================================
// SERVICE INFORMATION
// ==========================================

const services = {

    buy: {
        title: "Buy a Property",
        description:
            "Tell us what kind of property you are looking for and our team can assist you with your enquiry.",
        button:
            "Start Buy Enquiry",
        message:
            "Hi Lelosandi Properties, I am interested in buying a property. I would like assistance finding a suitable property."
    },

  rent: {
        title: "Rent a Property",
        description:
            "Looking for a place to rent? Tell us what you need and we can help you with your rental enquiry.",
        button:
            "Start Rental Enquiry",
        message:
            "Hi Lelosandi Properties, I am looking for a property to rent and would like assistance."
    },

    loan: {
        title: "Home Loan Assistance",
        description:
            "Need help with your home finance enquiry? Speak to Lelosandi Properties about the next steps.",
        button:
            "Ask About Home Loans",
        message:
            "Hi Lelosandi Properties, I would like assistance with a home loan enquiry."
    },

  evaluation: {
        title: "Property Evaluation",
        description:
            "Would you like assistance understanding your property's potential value? Start an enquiry with Lelosandi Properties.",
        button:
            "Request Evaluation",
        message:
            "Hi Lelosandi Properties, I would like to enquire about having my property evaluated."
    },

  flisp: {
        title: "FLISP Assistance",
        description:
            "Find out more about the FLISP housing assistance process and whether you may qualify.",
        button:
            "Ask About FLISP",
        message:
            "Hi Lelosandi Properties, I would like more information about FLISP assistance."
    },

    contact: {
        title: "Speak to Lelosandi",
        description:
            "Have a question or need help with a property matter? Contact the Lelosandi Properties team directly.",
        button:
            "Chat on WhatsApp",
        message:
            "Hi Lelosandi Properties, I would like to speak to someone about a property enquiry."
    }

};

// ==========================================
// OPEN SERVICE
// ==========================================

function openService(serviceName) {

    const modal = document.getElementById("serviceModal");

    const formContent = document.getElementById("formContent");

    const service = services[serviceName];

    if (!modal || !formContent || !service) {

        console.error(
            "Lelosandi: Service could not be opened:",
            serviceName
        );

        return;

    }

formContent.innerHTML = `

        <div class="service-modal-content">

            <span class="section-label">
                LELOSANDI PROPERTIES
            </span>

            <h2>
                ${service.title}
            </h2>

            <p>
                ${service.description}
            </p>

            <div class="enquiry-box">

                <h3>
                    Start your enquiry
                </h3>

                <label for="customerName">
                    Your name
                </label>

                <input
                    type="text"
                    id="customerName"
                    placeholder="Enter your name"
                    autocomplete="name"
                >
                <label for="customerMessage">
                    Tell us what you need
                </label>

                <textarea
                    id="customerMessage"
                    rows="4"
                    placeholder="Tell us what you're looking for..."
                ></textarea>

                <button
                    type="button"
                    class="primary-btn"
                    onclick="sendServiceWhatsApp('${serviceName}')"
                >
                    ${service.button}
                    <span>→</span>
                </button>
                </div>

        </div>

    `;

modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}

// ==========================================
// SEND SERVICE ENQUIRY
// ==========================================

function sendServiceWhatsApp(serviceName) {

    const service = services[serviceName];

    if (!service) {
        return;
    }


    const nameElement =
        document.getElementById("customerName");

    const messageElement =
        document.getElementById("customerMessage");

const name =
        nameElement ?
        nameElement.value.trim() :
        "";

    const customerMessage =
        messageElement ?
        messageElement.value.trim() :
        "";


    let message =
        service.message;

if (name) {

        message +=
            "\n\nName: " +
            name;

    }


    if (customerMessage) {

        message +=
            "\nMessage: " +
            customerMessage;

    }

}


    openWhatsApp(message);

}

// ==========================================
// CLOSE SERVICE MODAL
// ==========================================

function closeService() {

    const modal =
        document.getElementById("serviceModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}

// ==========================================
// ESCAPE KEY
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeService();

        }

    }
);

// ==========================================
// PREVENT MODAL BOX CLICK FROM CLOSING
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("serviceModal");

        const modalBox =
            document.querySelector(".modal-box");


        if (
            modal &&
            modal.classList.contains("active") &&
            event.target === modal
        ) {

            closeService();

        }

      }
);

// ==========================================
// PAGE READY
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Lelosandi Properties website loaded successfully."
        );

    }
)
