import { Sequelize } from 'sequelize';

export const connectDB = async () => {
  const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
    }
  );

  // Testing database connection
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.'.cyan.underline);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
