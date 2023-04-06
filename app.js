import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/errorHandlerMiddleware.js';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { initializeRoutes } from './routes/index.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Routes here
initializeRoutes(app);

// Using express error hander
app.use(errorHandler);

export default app;
