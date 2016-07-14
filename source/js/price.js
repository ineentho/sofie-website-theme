/* global $ */

(function () {
  var $priceElements = $('[data-price]')

  window.toggleVAT = function (inclusive) {
    $priceElements.each(function (i, elem) {

      var price = parseInt($(elem).attr('data-price'))

      if (inclusive) {
        price *= 1.25
      }

      $(elem).text(price + ' kr')
    })
  }

  toggleVAT(true)
})()
