export function getQuery (url) {
  const [ , ...rest ] = url.split('?')
  const query = rest.join('?')

  return query
    .split('&')
    .reduce((result, param) => {
      let [ key, value ] = param.split('=')

      key = decodeURIComponent(key)
      value = decodeURIComponent(value)
      return { ...result, [key]: value || true }
    }, {})
}
