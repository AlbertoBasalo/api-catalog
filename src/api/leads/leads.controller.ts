import * as express from 'express';
import { post } from '../../util/data/crud.controller';
import { notifyContact } from './leads.domain';
import { LeadsMongoRepository } from './leads.repository';
const repository = new LeadsMongoRepository();

export function postLead(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  post(req, res, next, repository, notifyContact);
}
