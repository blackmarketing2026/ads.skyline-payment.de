/* Skyline Payments - injects the shared site footer.
   Include this script on every page, with a placeholder element:
   <div id="site-footer" data-base="./"></div>  (use data-base="../" from pages/ subfolder) */
(function () {
  "use strict";

  var mount = document.getElementById("site-footer");
  if (!mount) return;

  var base = mount.getAttribute("data-base") || "./";

  mount.innerHTML = `<footer class="bg-ink py-8 text-white"><div class="section-shell grid gap-8 md:grid-cols-[220px_1fr_1fr] md:items-center"><img alt="Skyline Payment" loading="lazy" width="180" height="76" decoding="async" style="color:transparent" src="${base}assets/images/logo/logo.webp"/><div><p class="font-black">Kassensysteme. Payment. Service.</p><p class="mt-2 font-medium text-white/[0.85]">Vom Tisch bis zur Theke. Tap. Pay. Done.</p><nav class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-white/72"><a href="${base}index.html#kassensysteme">Kassensysteme</a><a href="${base}index.html#funktionen">Funktionen</a><a href="${base}index.html#kontakt">Kontakt</a><a href="${base}pages/blog/index.html">Blog</a><a href="${base}pages/impressum.html">Impressum</a><a href="${base}pages/datenschutz.html">Datenschutz</a><a href="${base}pages/agb.html">AGB</a><button type="button" class="cookie-footer-link" onclick="window.cookieConsent &amp;&amp; window.cookieConsent.openSettings()">Cookie-Einstellungen</button></nav></div><div class="grid gap-4 text-sm font-bold md:justify-end"><span class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6 text-gold-light"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>Deutschlandweit für Sie da</span><span class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round h-6 w-6 text-gold-light"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>Persönlicher Ansprechpartner</span></div></div></footer>`;
})();
