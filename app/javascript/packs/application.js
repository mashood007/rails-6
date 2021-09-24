// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap'
require("stylesheets/application.scss")

require("bootstrap")
import "../stylesheets/application";
require("packs/contact");

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

document.addEventListener("turbolinks:load", function() {
    $('.btn-success').on('click', function(){
      alert(1)
    })
})

Rails.start()
Turbolinks.start()
ActiveStorage.start()