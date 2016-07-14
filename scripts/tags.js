/* global hexo */

hexo.extend.tag.register('price', function (args) {
  var priceExclVAT = args[0]
  return '<span class="price" data-price="' + priceExclVAT + '">' + priceExclVAT * 1.25 + ':-</span>'
})

hexo.extend.tag.register('vat', function () {
  return '<span data-including-vat></span>'
})
