export function getQuery (url) {
  // TODO: handle queries with `?` in them
  return (url.split('?')[1] || '')
    .split('&')
    .reduce((result, param) => {
      const [ key, value = true ] = param.split('=')
      return { ...result, [key]: value }
    }, {})
}
