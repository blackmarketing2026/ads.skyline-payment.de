Fonts for this project are loaded from Google Fonts via CDN link tags
in the <head> of index.html and pages/*.html (Manrope for body text,
Fraunces for headlines). No font files are self-hosted.

If you need to self-host the fonts instead (e.g. for GDPR / offline
reasons), download the .woff2 files for Manrope and Fraunces and place
them in this folder, then replace the Google Fonts <link> tags with
local @font-face rules in css/style.css.
