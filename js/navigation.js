/* Skyline Payments - injects the shared site header/navigation and wires up the mobile menu toggle.
   Include this script on every page, with a placeholder element:
   <div id="site-header" data-base="./"></div>  (use data-base="../" from pages/ subfolder) */
(function () {
  "use strict";

  var mount = document.getElementById("site-header");
  if (!mount) return;

  var base = mount.getAttribute("data-base") || "./";

  mount.innerHTML = `<header class="sticky top-0 z-50 border-b border-white/10 bg-ink shadow-[0_8px_28px_rgba(0,0,0,0.35)]"><div class="section-shell flex h-[86px] items-center justify-between gap-6 lg:h-[104px]"><a aria-label="Skyline Payments Startseite" class="shrink-0" href="${base}index.html"><img alt="Skyline Payment" fetchPriority="high" width="190" height="81" decoding="async" style="color:transparent" src="${base}assets/images/logo/logo.webp"/></a><nav class="hidden items-center gap-12 text-sm font-extrabold text-white lg:flex"><a class="transition hover:text-gold-light" href="${base}index.html#kassensysteme">Kassensysteme</a><a class="transition hover:text-gold-light" href="${base}index.html#funktionen">Funktionen</a><a class="transition hover:text-gold-light" href="${base}index.html#loesungen">Für wen?</a><a class="transition hover:text-gold-light" href="${base}index.html#prozess">Über uns</a><a class="transition hover:text-gold-light" href="${base}index.html#kontakt">Kontakt</a></nav><a href="https://wa.me/49XXXXXXXXXX?text=Hallo%20Skyline%20Payments%2C%20ich%20interessiere%20mich%20fuer%20ein%20Kassensystem." class="gold-button hidden min-h-12 items-center gap-2 rounded-lg px-6 text-sm font-extrabold text-white shadow-premium transition hover:scale-[1.02] lg:flex"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="h-5 w-5"><path d="M8 41l2.8-9.2A17.2 17.2 0 1 1 17 38.1L8 41z" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"></path><path d="M18.5 16.9c.5-1.1 1-1.2 1.8-1.2h1.3c.5 0 .9.1 1.2.8l1.8 4.2c.2.6.1 1-.2 1.4l-1.2 1.4c1.3 2.2 3.1 4 5.5 5.3l1.4-1.2c.5-.4.9-.5 1.5-.2l4 1.9c.7.3.8.8.8 1.3v1.1c0 .9-.3 1.5-1.2 2-1.3.7-3.7 1.3-7 .2-4.1-1.4-7.2-4.2-9.4-7.6-2.1-3.1-2.6-6.1-1.3-9.4z" fill="currentColor"></path></svg>Jetzt anfragen</a><button id="nav-toggle" class="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden" aria-label="Navigation öffnen" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></div><div id="mobile-nav" class="hidden border-t border-white/10 bg-ink px-4 pb-5 lg:hidden"><nav class="mx-auto flex max-w-sm flex-col gap-1 py-3"><a class="rounded-md px-3 py-3 font-bold text-white hover:bg-white/[0.08]" href="${base}index.html#kassensysteme">Kassensysteme</a><a class="rounded-md px-3 py-3 font-bold text-white hover:bg-white/[0.08]" href="${base}index.html#funktionen">Funktionen</a><a class="rounded-md px-3 py-3 font-bold text-white hover:bg-white/[0.08]" href="${base}index.html#loesungen">Für wen?</a><a class="rounded-md px-3 py-3 font-bold text-white hover:bg-white/[0.08]" href="${base}index.html#prozess">Über uns</a><a class="rounded-md px-3 py-3 font-bold text-white hover:bg-white/[0.08]" href="${base}index.html#kontakt">Kontakt</a><a href="https://wa.me/49XXXXXXXXXX?text=Hallo%20Skyline%20Payments%2C%20ich%20interessiere%20mich%20fuer%20ein%20Kassensystem." class="gold-button mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 font-extrabold text-white"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="h-5 w-5"><path d="M8 41l2.8-9.2A17.2 17.2 0 1 1 17 38.1L8 41z" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"></path><path d="M18.5 16.9c.5-1.1 1-1.2 1.8-1.2h1.3c.5 0 .9.1 1.2.8l1.8 4.2c.2.6.1 1-.2 1.4l-1.2 1.4c1.3 2.2 3.1 4 5.5 5.3l1.4-1.2c.5-.4.9-.5 1.5-.2l4 1.9c.7.3.8.8.8 1.3v1.1c0 .9-.3 1.5-1.2 2-1.3.7-3.7 1.3-7 .2-4.1-1.4-7.2-4.2-9.4-7.6-2.1-3.1-2.6-6.1-1.3-9.4z" fill="currentColor"></path></svg>Jetzt anfragen</a></nav></div></header>`;

  var toggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (!toggle || !mobileNav) return;

  var menuIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
  var closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';

  toggle.addEventListener("click", function () {
    var willOpen = mobileNav.classList.contains("hidden");
    mobileNav.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.innerHTML = willOpen ? closeIcon : menuIcon;
  });

  mobileNav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      mobileNav.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = menuIcon;
    }
  });
})();
