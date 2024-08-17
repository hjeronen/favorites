import { Sequelize } from 'sequelize';
import { DATABASE_URL } from './config';

const sequelize: Sequelize = new Sequelize(DATABASE_URL);

const dbInit: Function = async () => {
  try {
    await sequelize.authenticate();
    console.log('database connected');
  } catch (err) {
    console.log('connecting database failed');
    return process.exit(1);
  }

  return null;
};

export { dbInit, sequelize };
