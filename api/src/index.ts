import 'reflect-metadata';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';

dotenv.config();

import routes from './routes';
import { DataSource } from './orm/dataSource';
import { errorHandling } from './middleware/errorHandling';

const app: Express = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', routes);
app.use(errorHandling)

app.listen(port, () => {
  console.log(`⚡️[Server]: Server running on ${host}:${port}`);
});

(async () => {
  await DataSource.initialize()
    .then(() => {
      console.log('⚡️[Database]: Data Source initialized successfully');
    })
    .catch((err) => {
      console.error('❌️[Database]: Error during Data Source initialization:', err);
    });
})();
