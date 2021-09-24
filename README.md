# Prerequisites

* Ruby 2.4+
* Rails 5.2+
* Node.js 12.13.0+ || 14+
* Yarn
* Yarn: js library installer like GEM

# Features
* Webpack v5
* ES6 with babel
* Automatic code splitting using multiple entry points
* Asset compression, source-maps, and minification
* CDN support
* Rails view helpers
* Extensible and configurable


# Add Jquery and Bootstrap using webpack(Yarn)
 * yarn add bootstrap jquery popper.js
 * Add jQuery and Popper.js plugins. These are required by Bootstrap.
 Now, in the file ~environment.js` add the following:

const { environment } = require('@rails/webpacker')
const webpack = require("webpack")
environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default']
  }))
module.exports = environment
 
 
* create a folder app/javascript/stylesheets and move all the 
 
# Javascript_pack_tag
# image_pack_tag
