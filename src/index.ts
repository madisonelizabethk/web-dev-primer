import express, { Request, Response } from 'express';
import ip from 'ip';

const app = express();

function handleRoot(req: Request, res: Response): void {
  res.send('Madison Kennedy');
}

app.get('/', handleRoot);

app.listen(9080, () => {
  console.log(`App is listening on http://${ip.address()}:${9080}`);
});
