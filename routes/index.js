import authRouter from './auth.js';

export const initializeRoutes = (app) => {
  app.use('/api/auth', authRouter);
};
