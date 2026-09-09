
const WHATSAPP_NUMBER = "27813460090";

const serviceData = {
    buy: {
        title: "Buy a Property",
        description: "Tell us what you're looking for and let Lelosandi Properties help you take the next step.",
        button: "Continue on WhatsApp",
        message: "Hi Lelosandi Properties, I am interested in buying a property."
    },

    rent: {
        title: "Rent a Property",
        description: "Tell us what kind of home you are looking for and we'll help you start your rental enquiry.",
        button: "Continue on WhatsApp",
        message: "Hi Lelosandi Properties, I am interested in renting a property."
    },

  loan: {
        title: "Home Loan Assistance",
        description: "Get guidance on your home-finance enquiry and understand the next steps.",
        button: "Ask About Home Loans",
        message: "Hi Lelosandi Properties, I would like assistance with a home loan."
    },

    evaluation: {
        title: "Property Evaluation",
        description: "Would you like assistance understanding your property's potential value? Start your enquiry below.",
        button: "Request Evaluation",
        message: "Hi Lelosandi Properties, I would like to enquire about a property evaluation."
    },

  flisp: {
        title: "FLISP Assistance",
        description: "Find out more about FLISP and get guidance on the application process.",
        button: "Ask About FLISP",
        message: "Hi Lelosandi Properties, I would like information about FLISP assistance."
    },

    contact: {
        title: "Speak to Lelosandi",
        description: "Have a question? Tell us what you need and continue directly to WhatsApp.",
        button: "Chat on WhatsApp",
        message: "Hi Lelosandi Properties, I would like to speak to someone."
    }
};

function openWhatsApp(message) {

    const text = message ||
        "Hi Lelosandi Properties, I would like to enquire about your property services.";

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(text);

    window.location.href = url;
}

function scrollToServices() {

    const section = document.getElementById("services");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function openService(type) {

    const modal = document.getElementById("serviceModal");
    const content = document.getElementById("formContent");

    const service = serviceData[type];

    if (!modal || !content || !service) {
        return;
    }

content.innerHTML = `
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

            <label class="form-label" for="leadName">
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

            <label class="form-label" for="leadPhone">
                Phone number
            </label>

            <input
                class="form-input"
                id="leadPhone"
                type="tel"
                placeholder="Enter your phone number"
            >

        </div>

        <div class="form-group">

            <label class="form-label" for="leadDetails">
                What are you looking for?
            </label>

            <input
                class="form-input"
                id="leadDetails"
                type="text"
                placeholder="Tell us what you need"
            >

        </div>

        <button
            class="whatsapp-submit"
            type="button"
            onclick="submitService('${type}')"
        >
            ${service.button}
            →
        </button>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function submitService(type) {

    const service = serviceData[type];

    if (!service) {
        return;
    }

    const name =
        document.getElementById("leadName")?.value.trim() || "";

    const phone =
        document.getElementById("leadPhone")?.value.trim() || "";

    const details =
        document.getElementById("leadDetails")?.value.trim() || "";


    let message = service.message;

if (name) {
        message += "\n\nName: " + name;
    }

    if (phone) {
        message += "\nPhone: " + phone;
    }

    if (details) {
        message += "\nRequirement: " + details;
    }


    closeService();

    openWhatsApp(message);
}

function closeService() {

    const modal = document.getElementById("serviceModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeService();
    }

});
