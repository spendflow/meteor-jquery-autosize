meteor-jquery-autosize
======================

jQuery Autosize ("a plugin to automatically adjust textarea height") repackaged for Meteor.

## Installation

1. `npm install -g meteorite` (if not already installed)
1. `mrt install jquery-autosize`
1. Call `$(selector).autosize()` in your `Template.templateName.rendered` callback. For example:

````javascript
$textarea = ('#textarea-selector', $(this.firstNode)); // Second argument establishes jQuery context
$textarea.autosize()
````

## Documentation

http://www.jacklmoore.com/autosize/

## Original package

https://github.com/jackmoore/autosize/

## Author

The Meteor repackage was created by Spendflow, a web app to help you budget the money you have.

[Click to sign up for the private beta.](http://wiz1.us/spendflowbeta)

Follow Spendflow on Twitter: [@spendflow](https://twitter.com/spendflow)
Follow @wizonesolutions on Twitter: [@wizonesolutions](https://twitter.com/wizonesolutions)
