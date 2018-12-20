import { test, assertEqual } from 'https://deno.land/x/testing/testing.ts'
import { getQuery } from '../lib/utils.js'

test({
  name: 'getQuery',
  fn () {
    assertEqual(getQuery('https://hostname?foo=bar&bar=baz'), { foo: 'bar', bar: 'baz' })
    assertEqual(getQuery('https://hostname?foo&bar=baz'), { foo: true, bar: 'baz' })
    assertEqual(getQuery('https://hostname?foo=bar%3Fbaz'), { foo: 'bar?baz' })
  }
})
