
function openWhatsApp() {
    window.location.href =
        "https://wa.me/27813460090?text=" +
        encodeURIComponent(
            "Hi Lelosandi Properties, I would like to enquire about your property services."
        );
}

function scrollToServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

function openService(type) {

    const modal = document.getElementById("serviceModal");
    const content = document.getElementById("formContent");

    const services = {
        buy: ["Buy a Property", "I am interested in buying a property."],
        rent: ["Rent a Property", "I am interested in renting a property."],
        loan: ["Home Loan Assistance", "I need assistance with a home loan."],
        evaluation: ["Property Evaluation", "I would like a property evaluation."],
        flisp: ["FLISP Assistance", "I would like information about FLISP."],
        contact: ["Speak to Lelosandi", "I would like to speak to Lelosandi."]
    };

const service = services[type];

    if (!service) return;

    content.innerHTML = `
        <h2>${service[0]}</h2>
        <p>${service[1]}</p>

        <button onclick="openWhatsApp(
            )">
            Continue on WhatsApp →
        </button>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
}

function closeService() {

    const modal = document.getElementById("serviceModal");

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
}
