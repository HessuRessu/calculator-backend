import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport:
    process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty', options: { colorize: true } }
      : undefined,
  base: {
    service: process.env.SERVICE_NAME,
    env: process.env.NODE_ENV,
  },
});

export default logger;
