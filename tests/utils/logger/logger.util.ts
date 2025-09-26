import { pino, stdTimeFunctions } from 'pino'

// interface
interface IDebugUtil {
  text: string
  value: unknown
  isActiveOnProd?: boolean
}

// logger util
export const loggerUtil = (props: IDebugUtil) => {
  const { text, value, isActiveOnProd = false } = props

  const isTestEnv = process.env.NODE_ENV === 'test'

  const options: Parameters<typeof pino>[0] = {
    timestamp: stdTimeFunctions.epochTime,
    enabled: process.env.NODE_ENV !== 'production' || isActiveOnProd,
    redact: [],
  }

  if (!isTestEnv) {
    Object.assign(options, {
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
    })
  }

  const logger = pino(options)

  logger.info(`[${text}]: ${JSON.stringify(value, null, 2)}`)
}
