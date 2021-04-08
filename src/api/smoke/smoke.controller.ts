import * as express from 'express';
import { sendSuccess } from '../../util/app/responseSenders';

export function getTest(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  sendSuccess(res, { hello: 'world' });
}
