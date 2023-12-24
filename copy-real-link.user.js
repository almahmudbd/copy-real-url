// ==UserScript==
// @name         Copy Real Link
// @namespace    https://thealmahmud.blogspot.com/
// @version      1.2
// @license      CC BY
// @description  Extract and copy real URLs from redirect URLs on Google, Fb, etc.
// @author       almahmud & gpt
// @match        *://www.google.*/*search*
// @match        *://search.yahoo.com/*
// @match        *://*.facebook.com/*
// @match        *://hangouts.google.com/*
// @grant        GM_setClipboard
// @downloadURL https://update.greasyfork.org/scripts/482987/Copy%20Real%20Link.user.js
// @updateURL https://update.greasyfork.org/scripts/482987/Copy%20Real%20Link.meta.js
// ==/UserScript==

(function() {
'use strict';

document.addEventListener('contextmenu', function(event){
    let target = event.target;

    // Check if the right-clicked element is a link
    if (target.tagName === 'A' && target.href) {
        let url = target.href;
        let testRE;

        // Define the regular expressions for each website
        if (document.URL.match("http(s|)://www.google")) {
            testRE = url.match("url=([^&]*)&");
        } else if (document.URL.match("http(s|)://mail.google")) {
            testRE = url.match("url\\?q=([^&]*)&");
        } else if (document.URL.match("http(s|)://www.facebook")) {
            testRE = url.match("u=([^&]*)&");
        } else if (document.URL.match("http(s|)://web.facebook")) {
            testRE = url.match("u=([^&]*)&");
        } else if (document.URL.match("http(s|)://.*search.yahoo")) {
            testRE = url.match("RU=([^/]*)/");
        }

        // Decode and copy the URL if a match is found
        if (testRE) {
            let realURL = decodeURIComponent(testRE[1]);
            GM_setClipboard(realURL); // Copy to clipboard
            event.preventDefault(); // Prevent the default context menu
        }
    }
});
})();
