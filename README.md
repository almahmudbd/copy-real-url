# Copy Real Link Userscript

## Overview

This userscript disables the original context menu of the browser and allows you to copy the real link on right-click instead of the redirecting URL. It works on Google Search, Yahoo Search, Facebook, and Hangouts.

## Installation

Install the userscript from [Greasy Fork](https://greasyfork.org/en/scripts/482987-copy-real-link) using a userscript manager extension such as [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).

## Usage

When browsing Google Search results, Yahoo Search, Facebook, or Hangouts, this userscript provides an additional option in the context menu labeled `Copy real link`. Clicking on this option copies the actual link (URL) into the clipboard, eliminating the need to deal with redirection URLs.

### Example

**Using Default Copy Link Address:**

``https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCMQFjAB&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLed_Zeppelin&ei=DFHnU8_mK4Hi8AXqpIDAAg&usg=AFQjCNHIjSJNblTZM7fbhcTkrPNp14SnKw&sig2=L95WqCRVToubyMsGNnBFWg&bvm=bv.72676100,d.dGc``


**Using Copy Real Link:**

``http://en.wikipedia.org/wiki/Led_Zeppelin``


For Facebook Chat links and links in Hangouts, the userscript provides similar functionality, offering the real link for copying.

## Credits

This userscript is inspired by the [Copy Real URL Chrome extension](https://chromewebstore.google.com/detail/copy-real-url/opelelcojgjgddbfhlolihhdmjodmjdf?hl=en-GB).
