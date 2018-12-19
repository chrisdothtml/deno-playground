import { cwd, env, readFileSync, statSync } from 'deno'
import * as path from 'https://deno.land/x/path/index.ts'

const ENV_FILEPATH = path.join(cwd(), '.env')

function parseEnvFile (envFile) {
  return envFile
    .split('\n')
    .filter(Boolean)
    .reduce((result, param) => {
      // TODO: handle values with `=` in them
      const [ key, value = true ] = param.split('=')
      return { ...result, [key]: value }
    }, {})
}

function readUTF8 (filepath) {
  const decoder = new TextDecoder('utf-8')
  const fileContent = readFileSync(filepath)

  return decoder.decode(fileContent)
}

try {
  const file = statSync(ENV_FILEPATH)

  if (file.isFile) {
    const newEnv = parseEnvFile(
      readUTF8(ENV_FILEPATH)
    )

    Object.assign(env(), newEnv)
  }
} catch (e) {/* noop */}
