/* Skyline Payments - injects the cookie consent banner/modal and gates
   tracking scripts behind consent. Include on every page, with a placeholder:
   <div id="cookie-consent" data-base="./"></div>  (use data-base="../" from pages/ subfolder)
   Scripts that may only run after consent must be marked up as:
   <script type="text/plain" data-consent-category="statistik" data-src="..."></script> */
(function () {
  "use strict";

  var mount = document.getElementById("cookie-consent");
  if (!mount) return;

  var base = mount.getAttribute("data-base") || "./";
  var STORAGE_KEY = "cookie_consent_v1";

  mount.innerHTML = `<div id="cookie-banner" class="cookie-banner" hidden><div class="cookie-banner-inner"><p>Wir nutzen Cookies. Notwendige Cookies sind für den Betrieb der Seite erforderlich, Statistik- und Marketing-Cookies nur mit Ihrer Einwilligung. Mehr dazu in unserer <a href="${base}pages/datenschutz.html">Datenschutzerklärung</a>.</p><div class="cookie-banner-actions"><button type="button" id="cookie-settings-open" class="cookie-btn cookie-btn-ghost">Einstellungen</button><button type="button" id="cookie-reject-all" class="cookie-btn cookie-btn-ghost">Nur notwendige</button><button type="button" id="cookie-accept-all" class="cookie-btn cookie-btn-primary">Alle akzeptieren</button></div></div></div><div id="cookie-modal" class="cookie-modal" hidden aria-modal="true" role="dialog" aria-labelledby="cookie-modal-title"><div class="cookie-modal-inner"><h2 id="cookie-modal-title">Cookie-Einstellungen</h2><label class="cookie-category"><input type="checkbox" checked disabled/><span><strong>Notwendig</strong> – immer aktiv, für den Betrieb der Website erforderlich.</span></label><label class="cookie-category"><input type="checkbox" id="cookie-cat-statistik"/><span><strong>Statistik</strong> – hilft uns, die Nutzung der Website zu verstehen.</span></label><label class="cookie-category"><input type="checkbox" id="cookie-cat-marketing"/><span><strong>Marketing</strong> – für personalisierte Werbung und Remarketing.</span></label><div class="cookie-banner-actions"><button type="button" id="cookie-modal-save" class="cookie-btn cookie-btn-primary">Auswahl speichern</button><button type="button" id="cookie-modal-close" class="cookie-btn cookie-btn-ghost">Abbrechen</button></div></div></div>`;

  var banner = document.getElementById("cookie-banner");
  var modal = document.getElementById("cookie-modal");
  var catStatistik = document.getElementById("cookie-cat-statistik");
  var catMarketing = document.getElementById("cookie-cat-marketing");

  function readConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function writeConsent(consent) {
    consent.timestamp = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
  }

  // Activates scripts marked up as <script type="text/plain" data-consent-category="..." data-src="...">
  // as soon as the matching category is allowed.
  function applyConsent(consent) {
    document
      .querySelectorAll("script[data-consent-category]")
      .forEach(function (placeholder) {
        var category = placeholder.getAttribute("data-consent-category");
        if (category === "notwendig" || consent[category]) {
          var script = document.createElement("script");
          Array.from(placeholder.attributes).forEach(function (attr) {
            if (attr.name === "type") return;
            if (attr.name === "data-src") {
              script.src = attr.value;
            } else {
              script.setAttribute(attr.name, attr.value);
            }
          });
          if (placeholder.textContent.trim()) {
            script.textContent = placeholder.textContent;
          }
          placeholder.replaceWith(script);
        }
      });
  }

  function openBanner() {
    banner.hidden = false;
  }

  function closeBanner() {
    banner.hidden = true;
  }

  function openSettings() {
    var current = readConsent() || {};
    if (catStatistik) catStatistik.checked = !!current.statistik;
    if (catMarketing) catMarketing.checked = !!current.marketing;
    modal.hidden = false;
  }

  function closeSettings() {
    modal.hidden = true;
  }

  document.getElementById("cookie-accept-all").addEventListener("click", function () {
    writeConsent({ notwendig: true, statistik: true, marketing: true });
    closeBanner();
    closeSettings();
  });

  document.getElementById("cookie-reject-all").addEventListener("click", function () {
    writeConsent({ notwendig: true, statistik: false, marketing: false });
    closeBanner();
    closeSettings();
  });

  document.getElementById("cookie-settings-open").addEventListener("click", openSettings);
  document.getElementById("cookie-modal-close").addEventListener("click", closeSettings);

  document.getElementById("cookie-modal-save").addEventListener("click", function () {
    writeConsent({
      notwendig: true,
      statistik: !!catStatistik.checked,
      marketing: !!catMarketing.checked,
    });
    closeBanner();
    closeSettings();
  });

  var existing = readConsent();
  if (existing) {
    applyConsent(existing);
  } else {
    openBanner();
  }

  // Global, so the "Cookie-Einstellungen" footer link can reopen the modal.
  window.cookieConsent = { openSettings: openSettings };
})();
