/* global hexo */

hexo.extend.tag.register('price', function (args) {
  var priceExclVAT = args[0]
  return '<span class="price" data-price="' + priceExclVAT + '">' + priceExclVAT + ':- (exkl moms)</span>'
})
