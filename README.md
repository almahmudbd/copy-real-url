# Copy Real Link Userscript

## Overview

The **Copy Real Link** userscript enhances your browsing experience by disabling the original context menu of the browser. Instead, it allows you to copy the real link (direct URL) on right-click, bypassing any redirecting URLs. This script works seamlessly on Google Search, Yahoo Search, Facebook, and Hangouts.

## Installation

1. Install a userscript manager extension like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) in your browser.
2. Install the "Copy Real Link" script by visiting [this link](https://greasyfork.org/en/scripts/482987-copy-real-link) on Greasy Fork.
3. or Create a new script and replace the default code with the code from the [GitHub Repo](https://github.com/almahmudbd/copy-real-url/raw/main/copy-real-link.user.js).
4. Save the script to make a try.

## Usage

When navigating through Google Search results, Yahoo Search, Facebook, or Hangouts, this userscript offers a convenient `Copy real link` option. Simply right-click on any link on the page, you will see a "Copy real URL" button next to the link.

You have the flexibility to enable or disable the script as needed using your Tampermonkey extension.

### Example

**Using Default Copy Link Address:**

``https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0CCMQFjAB&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRuqyah&ei=DFHnU8_mK4Hi8AXqpIDAAg&usg=AFQjCNHIjSJNblTZM7fbhcTkrPNp14SnKw&sig2=L95WqCRVToubyMsGNnBFWg&bvm=bv.72676100,d.dGc``

**Using Copy Real Link:**

``http://en.wikipedia.org/wiki/ruqyah``

For Facebook Chat links and links in Hangouts, the userscript provides similar functionality, offering the real link for copying.

## Changelog

### Version 1.2
- Added a "Copy real URL" button next to the link on right-click.
- Improved the user interface of the copy action.
- Maintained the original functionality of copying the direct link to the clipboard.

## Credits

This userscript is inspired by the [Copy Real URL Chrome extension](https://chromewebstore.google.com/detail/copy-real-url/opelelcojgjgddbfhlolihhdmjodmjdf?hl=en-GB).
