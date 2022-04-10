# Facebook Phishing Example

A demo of a site that attempts to replicate Facebook sign-in page.

## Purpose

The purpose of this is to promote the use of multi-factor authentication by demonstrating how easy it is to have your credentials stolen.

## What it does

The index page is a clone of https://facebook.com. The CSS files have been merged and external assets removed. All JavaScript has been removed as it is not required.

The login button submits the form data to login.php which itself writes to a file called passwords.txt which is stored in the root directory. It would be entirely possible have this e-mailed to an address using PHP mail() but for the purpose of this demo it has not been implemented.

## License

[The Unlicense](UNLICENSE)
