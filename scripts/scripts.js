import jQuery from "jquery"
window.$ = window.jQuery = jQuery

import 'popper.js'
import 'bootstrap'

$(function() {
  setTimeout(function (){
    $('#loading').removeClass('loading')
    $('#loading').css('display', 'none')
  }, 1500)
})