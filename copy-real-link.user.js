// ==UserScript==
// @name         Copy Real Link
// @version      1.2
// @namespace    https://greasyfork.org/en/scripts/482987-copy-real-link
// @license      CC BY
// @description  Extract and copy real URLs from redirect URLs on Google, Fb, etc., with a copy button.
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

    const createCopyButton = (url) => {
        const button = document.createElement('button');
        button.textContent = 'Copy Real Link'; 
        button.style.position = 'absolute';
        button.style.zIndex = '1000';
        button.style.backgroundColor = '#007bff';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '5px 10px';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';

        button.onclick = () => {
            GM_setClipboard(url); // Copy to clipboard
            button.textContent = 'Copied!'; // Update button text to indicate success
            setTimeout(() => button.remove(), 2000); // Remove button after a short delay
        };

        return button;
    };

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

            // Decode the URL if a match is found
            if (testRE) {
                let realURL = decodeURIComponent(testRE[1]);

                // Create and position the copy button
                const button = createCopyButton(realURL);
                document.body.appendChild(button);
                const rect = target.getBoundingClientRect();
                button.style.top = `${rect.top + window.scrollY}px`;
                button.style.left = `${rect.right + window.scrollX + 5}px`;
                
                // Show the default context menu
                setTimeout(() => {
                    button.remove();
                }, 2000); // Remove button after a short delay
            }
        }
    });
})();
