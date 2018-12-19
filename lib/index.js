import { env } from 'deno'
import { serve } from 'https://deno.land/x/net/http.ts'
import { getQuery } from './utils.js'
import './dotenv.js'

const { PORT = 8000 } = env()

;(async () => {
  const address = `0.0.0.0:${PORT}`
  const server = serve(address)

  console.log(`\nlistening on http://${address}`)
  for await (const req of server) {
    const { name = 'World' } = getQuery(req.url)

    req.respond({
      body: new TextEncoder().encode(`Hello, ${decodeURIComponent(name)}!\n`)
    })
  }
})()
