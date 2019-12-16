// Coloquei um jQueryzinho aqui pra ajudar galerinha novata :)
// mas se você já é o ninja do VanillaJS pode desconsiderar

import jQuery from "jquery"
window.$ = window.jQuery = jQuery

$(function() {
  setTimeout(function (){
    $('#loading').removeClass('loading')
    $('#loading').css('display', 'none')
  }, 1500)
})

// importa bootstrap4 inteiro:
  // import 'popper.js'
  // import 'bootstrap' 

// importa bootstrap4 por modulos:
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/modal'
