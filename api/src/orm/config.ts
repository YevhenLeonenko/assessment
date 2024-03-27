import dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import * as process from 'process';

dotenv.config();

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: [__dirname + '/entities/**/*.{js,ts}'],
  migrations: [__dirname + '/migrations/**/*.{js,ts}'],
};

export default config;
