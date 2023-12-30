import { web } from './application/web.js';
import { logger } from './application/logging.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 5000;

web.listen(port, () => {
  logger.info(`App Start on Port : ${port}`);
});
