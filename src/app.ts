import dotenv from 'dotenv';
import express, { Express } from 'express';
import { router } from './index.routes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

// Kill all the child process, ts-node-dev needs this to reload after a save
// while using prisma orm
process.on('SIGTERM', () => {
  process.exit();
});

app.use(express.json({ limit: '200mb' }), router);
app.listen(port, () => {
  console.log(
    'server running in port:',
    port,
    `\nAPI URL:  http://localhost:${port}/`
  );
});
