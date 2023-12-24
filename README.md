# Copy Real Link Userscript

## Overview

This userscript disables the original context menu of the browser and allows you to copy the real link on right-click instead of the redirecting URL. It works on Google Search, Yahoo Search, Facebook, and Hangouts.

## Installation

1. Install a userscript manager extension like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) in your browser.

2. Install the "Copy Real Link" script by visiting [this link](https://greasyfork.org/en/scripts/482987-copy-real-link) in Greasyfork or [this link](https://github.com/almahmudbd/copy-real-url/raw/main/copy-real-link.user.js) of Github raw code.

## Usage

When navigating through Google Search results, Yahoo Search, Facebook, or Hangouts, this userscript offers a convenient `Copy real link` option. Simply right-clicking on any link on the page will copy the direct link (URL) to the clipboard, bypassing any redirection URLs. 
You have the flexibility to enable or disable the script as required using your Tempermonkey extension.

### Example

**Using Default Copy Link Address:**

``https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCMQFjAB&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRuqyah&ei=DFHnU8_mK4Hi8AXqpIDAAg&usg=AFQjCNHIjSJNblTZM7fbhcTkrPNp14SnKw&sig2=L95WqCRVToubyMsGNnBFWg&bvm=bv.72676100,d.dGc``


**Using Copy Real Link:**

``http://en.wikipedia.org/wiki/ruqyah``


For Facebook Chat links and links in Hangouts, the userscript provides similar functionality, offering the real link for copying.

## Credits

This userscript is inspired by the [Copy Real URL Chrome extension](https://chromewebstore.google.com/detail/copy-real-url/opelelcojgjgddbfhlolihhdmjodmjdf?hl=en-GB).
