const CONTACT = {
  phone: "+49XXXXXXXXXX",
  whatsapp: "49XXXXXXXXXX",
  email: "info@skyline-payments.de",
};

const whatsappText = encodeURIComponent("Hallo Skyline Payments, ich interessiere mich für ein Kassensystem.");
const phoneLink = `tel:${CONTACT.phone.replace(/\s/g, "")}`;
const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${whatsappText}`;

document.querySelectorAll("[data-phone]").forEach((link) => {
  link.href = phoneLink;
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappLink;
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector("#formular");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const privacy = data.get("privacy");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  status.className = "form-status";

  if (!name || !phone || !email) {
    status.textContent = "Bitte füllen Sie alle Pflichtfelder aus.";
    status.classList.add("error");
    return;
  }

  if (!validEmail) {
    status.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    status.classList.add("error");
    return;
  }

  if (!privacy) {
    status.textContent = "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.";
    status.classList.add("error");
    return;
  }

  status.textContent = "Danke, Ihre Anfrage wurde vorbereitet. Für den echten Versand kann später ein Formularanbieter oder Mail-Service angebunden werden.";
  status.classList.add("success");
  form.reset();
});
