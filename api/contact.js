const nodemailer = require("nodemailer");

function sanitizeHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Best-effort normalisation of a free-text phone number into digits-only
// international format for wa.me links (defaults to Germany, +49, since
// that's this business's market).
function toWhatsAppDigits(phone) {
  var digits = String(phone || "").replace(/[^\d+]/g, "");
  digits = digits.replace(/^\+/, "");
  if (digits.indexOf("00") === 0) digits = digits.slice(2);
  else if (digits.indexOf("0") === 0) digits = "49" + digits.slice(1);
  return digits;
}

function toTelHref(phone) {
  var cleaned = String(phone || "").replace(/[^\d+]/g, "");
  return "tel:" + cleaned;
}

function redirect(res, path) {
  res.writeHead(302, { Location: path });
  res.end();
}

function buildLeadEmailHtml(data) {
  var name = escapeHtml(data.name);
  var company = escapeHtml(data.company) || "-";
  var phone = escapeHtml(data.phone);
  var email = escapeHtml(data.email);
  var industry = escapeHtml(data.industry) || "-";
  var message = escapeHtml(data.message) || "-";
  var logoUrl = data.origin + "/assets/images/logo/logo.webp";

  var waText = encodeURIComponent(
    "Hallo " + data.name + ", hier ist Skyline Payment. Vielen Dank für Ihre Anfrage - wie können wir Ihnen weiterhelfen?"
  );
  var waHref = "https://wa.me/" + toWhatsAppDigits(data.phone) + "?text=" + waText;
  var telHref = toTelHref(data.phone);
  var mailHref = "mailto:" + data.email + "?subject=" + encodeURIComponent("Re: Ihre Anfrage bei Skyline Payment");

  var row = function (label, value) {
    return (
      '<tr>' +
      '<td style="padding:10px 0;border-bottom:1px solid #e9e4da;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#8a7a4a;white-space:nowrap;vertical-align:top;width:120px;">' +
      label +
      '</td>' +
      '<td style="padding:10px 0 10px 16px;border-bottom:1px solid #e9e4da;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111417;vertical-align:top;">' +
      value +
      "</td>" +
      "</tr>"
    );
  };

  return (
    '<!doctype html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="utf-8"/>' +
    '<meta name="viewport" content="width=device-width, initial-scale=1"/>' +
    "<title>Neue Anfrage – Skyline Payment</title>" +
    "<style>" +
    "body,table,td{font-family:Arial,Helvetica,sans-serif;}" +
    "img{border:0;line-height:100%;outline:none;text-decoration:none;}" +
    "a{text-decoration:none;}" +
    "@media screen and (max-width:480px){.sp-btn-cell{display:block!important;width:100%!important;padding:0 0 10px 0!important;}.sp-btn-cell:last-child{padding-bottom:0!important;}}" +
    "</style></head>" +
    '<body style="margin:0;padding:0;background-color:#f7f7f5;">' +
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Neue Anfrage von ' +
    name +
    (company !== "-" ? " (" + company + ")" : "") +
    "</div>" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7f5;padding:32px 16px;">' +
    "<tr><td align=\"center\">" +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;">' +
    // Header
    "<tr><td>" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#080b0f;">' +
    '<tr><td align="center" style="padding:32px 24px 28px 24px;">' +
    '<img src="' +
    logoUrl +
    '" width="150" height="65" alt="Skyline Payment" style="display:block;width:150px;height:auto;"/>' +
    '<p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#d8aa50;">Neue Anfrage über die Website</p>' +
    "</td></tr>" +
    "</table>" +
    "</td></tr>" +
    // Body
    '<tr><td style="padding:32px 28px 8px 28px;">' +
    '<h1 style="margin:0 0 4px;font-family:Georgia,\'Times New Roman\',serif;font-size:22px;color:#111417;">' +
    name +
    "</h1>" +
    (company !== "-"
      ? '<p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#6b6558;">' + company + "</p>"
      : '<div style="height:20px;line-height:0;">&nbsp;</div>') +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
    row("Telefon", phone) +
    row("E-Mail", email) +
    row("Branche", industry) +
    "</table>" +
    '<p style="margin:20px 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#8a7a4a;">Nachricht</p>' +
    '<p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#111417;white-space:pre-wrap;">' +
    message.replace(/\n/g, "<br/>") +
    "</p>" +
    "</td></tr>" +
    // CTA buttons
    '<tr><td style="padding:8px 28px 32px 28px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
    "<tr>" +
    '<td class="sp-btn-cell" width="33.3%" style="padding:0 6px 0 0;" align="center">' +
    '<a href="' +
    waHref +
    '" target="_blank" style="display:block;background-color:#c99432;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;padding:13px 8px;border-radius:8px;text-align:center;">WhatsApp</a>' +
    "</td>" +
    '<td class="sp-btn-cell" width="33.3%" style="padding:0 3px;" align="center">' +
    '<a href="' +
    telHref +
    '" style="display:block;background-color:#080b0f;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;padding:13px 8px;border-radius:8px;text-align:center;">Anrufen</a>' +
    "</td>" +
    '<td class="sp-btn-cell" width="33.3%" style="padding:0 0 0 6px;" align="center">' +
    '<a href="' +
    mailHref +
    '" style="display:block;background-color:#ffffff;color:#111417;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;padding:12px 8px;border-radius:8px;text-align:center;border:1px solid #d7d2c4;">E-Mail</a>' +
    "</td>" +
    "</tr>" +
    "</table>" +
    "</td></tr>" +
    // Footer
    "<tr><td>" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#080b0f;">' +
    '<tr><td align="center" style="padding:16px 24px;">' +
    '<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#8a8579;">Skyline Payment® · Automatische Benachrichtigung vom Kontaktformular auf ads.skyline-payment.de</p>' +
    "</td></tr>" +
    "</table>" +
    "</td></tr>" +
    "</table>" +
    "</td></tr>" +
    "</table>" +
    "</body></html>"
  );
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).send("Method Not Allowed");
    return;
  }

  var body = req.body || {};

  // Honeypot: real visitors never fill this (it's hidden via CSS). Bots that
  // blindly fill every field do - silently pretend success without sending.
  if (sanitizeHeader(body.website)) {
    redirect(res, "/pages/danke.html");
    return;
  }

  var name = sanitizeHeader(body.name);
  var company = sanitizeHeader(body.company);
  var phone = sanitizeHeader(body.phone);
  var email = sanitizeHeader(body.email);
  var industry = sanitizeHeader(body.industry);
  var message = String(body.message || "").trim();
  var privacyAccepted = body.privacy === "accepted";

  if (!name || !phone || !email || !isValidEmail(email) || !privacyAccepted) {
    redirect(res, "/pages/fehler.html");
    return;
  }

  var origin = "https://" + (req.headers["x-forwarded-host"] || req.headers.host);

  var lines = [
    "Neue Anfrage über das Kontaktformular auf ads.skyline-payment.de",
    "",
    "Name: " + name,
    "Unternehmen: " + (company || "-"),
    "Telefon: " + phone,
    "E-Mail: " + email,
    "Branche: " + (industry || "-"),
    "",
    "Nachricht:",
    message || "-",
  ];

  try {
    var transporter = nodemailer.createTransport({
      host: process.env.smtp_server,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.smtp_user,
        pass: process.env.smtp_passwort,
      },
    });

    await transporter.sendMail({
      from: '"Skyline Payments Website" <' + process.env.smtp_user + ">",
      to: process.env.smtp_empfaenger,
      replyTo: '"' + name + '" <' + email + ">",
      subject: "Neue Anfrage über die Website – " + name + (company ? " (" + company + ")" : ""),
      text: lines.join("\n"),
      html: buildLeadEmailHtml({ name: name, company: company, phone: phone, email: email, industry: industry, message: message, origin: origin }),
    });

    redirect(res, "/pages/danke.html");
  } catch (err) {
    console.error("contact form send failed:", err);
    redirect(res, "/pages/fehler.html");
  }
};
