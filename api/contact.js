const nodemailer = require("nodemailer");

function sanitizeHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function redirect(res, path) {
  res.writeHead(302, { Location: path });
  res.end();
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
    });

    redirect(res, "/pages/danke.html");
  } catch (err) {
    console.error("contact form send failed:", err);
    redirect(res, "/pages/fehler.html");
  }
};
