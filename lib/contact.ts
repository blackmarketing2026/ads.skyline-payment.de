export const CONTACT = {
  phone: "+49XXXXXXXXXX",
  whatsapp: "49XXXXXXXXXX",
  email: "info@skyline-payments.de",
};

export const contactLinks = {
  phone: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hallo Skyline Payments, ich interessiere mich fuer ein Kassensystem."
  )}`,
  email: `mailto:${CONTACT.email}`,
};
