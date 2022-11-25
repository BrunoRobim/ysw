import dotenv from 'dotenv';
import express, { Express } from 'express';
import { router } from './index.routes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    'server running in port:',
    port,
    `\nAPI URL:  http://localhost:${port}/`
  );
});

app.use(express.json({ limit: '200mb' }), router);
