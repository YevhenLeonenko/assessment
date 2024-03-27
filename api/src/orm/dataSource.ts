import { DataSource as ORMDataSource } from 'typeorm';

import config from './config';
export const DataSource = new ORMDataSource(config);
