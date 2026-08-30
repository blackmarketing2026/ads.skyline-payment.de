/* Skyline Payments - pushes custom GTM dataLayer events for outbound
   contact interactions. Include on every page, after cookie-consent.js.
   Events only ever reach Google once GTM itself has loaded, which only
   happens after the visitor grants Statistik/Marketing consent - this file
   just records the interaction into window.dataLayer, it never loads or
   calls anything Google-related itself. */
(function () {
  "use strict";

  window.dataLayer = window.dataLayer || [];

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a[href]") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";

    if (href.indexOf("wa.me") !== -1) {
      window.dataLayer.push({ event: "whatsapp" });
    } else if (href.indexOf("tel:") === 0) {
      window.dataLayer.push({ event: "Anruf-klicken" });
    }
  });
})();
