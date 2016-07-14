

function isActive(path) {
  console.log(this.path, path)

  var normalized = this.path.replace(/index\.html$/, '').replace(/\/$/, '')

  if (normalized[0] !== '/') {
    normalized = '/' + normalized
  }

  return normalized === path
}

hexo.extend.helper.register('is_active', isActive)

