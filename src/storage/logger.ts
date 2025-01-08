import { createLogger } from "redux-logger";

const logger = createLogger({
  logErrors: true,
  timestamp: true,
  duration: true,
  stateTransformer: (state: Record<string, unknown>) => ({
    ...state,
  }),
});

export { logger };
