/* global $ */

;(function () {
  var IS_PRIVATE = 'isPrivate'

  function toggleVAT (inclusive) {
    var $priceElements = $('[data-price]')
    var $pricemode = $('#pricemode')
    var $includingVat = $('[data-including-vat]')

    $priceElements.each(function (i, elem) {
      var price = parseInt($(elem).attr('data-price'))

      if (inclusive) {
        price *= 1.25
      }

      price = Math.round(price)

      $(elem).text(price + ':-')
    })

    $pricemode.text(inclusive ? 'Privatperson' : 'Företagare')
    $includingVat.text(inclusive ? 'inklusive moms' : 'exklusive moms')
  }

  window.loadSite = function () {
    console.log('load site')
    $('[data-pricemode]').on('click', function () {
      var isPrivate = $(this).attr('data-pricemode') === 'private'

      toggleVAT(isPrivate)
      window.localStorage.setItem(IS_PRIVATE, JSON.stringify(isPrivate))
    })

    if (window.localStorage.getItem(IS_PRIVATE) === null) {
      window.localStorage.setItem(IS_PRIVATE, JSON.stringify(true))
    }

    toggleVAT(JSON.parse(window.localStorage.getItem(IS_PRIVATE)))
  }
})()
