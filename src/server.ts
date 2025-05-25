import express, { Request, Response, NextFunction } from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const app = express();
const port = process.env['PORT'] || 4000;
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

app.use(express.static(browserDistFolder));

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(join(browserDistFolder, 'index.html'));
});

app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
