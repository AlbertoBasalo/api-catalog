import * as express from 'express';
import { sendNotFound, sendSuccess } from '../../util/app/responseSenders';
import { get, getById, post, put, remove } from '../../util/data/crud.controller';
import { Resource } from './resource';
import { validateResource } from './resources.domain';
import { ResourcesMongoRepository } from './resources.repository';

const repository = new ResourcesMongoRepository();

export async function getResources(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const categoryId = req.query.byCategory as string;
  if (categoryId) {
    const result = (await repository.selectByCategoryId(categoryId)) as Resource[];
    if (result) {
      sendSuccess(res, result);
    } else {
      sendNotFound(res);
    }
  } else {
    get(req, res, next, repository);
  }
}

export function getResourceById(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  getById(req, res, next, repository);
}

export async function getResourcesByCategoryId(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const categoryId = req.params.id;
  const result = await repository.selectByCategoryId(categoryId);
  if (result) {
    sendSuccess(res, result);
  } else {
    sendNotFound(res);
  }
}

export async function getResourcesMetadataByCategoryId(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const categoryId = req.params.id;
  const result = await repository.countByCategoryId(categoryId);
  if (result) {
    sendSuccess(res, result);
  } else {
    sendNotFound(res);
  }
}

export function postResource(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  post(req, res, next, repository, validateResource);
}

export function putResource(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  put(req, res, next, repository);
}

export function deleteResource(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  remove(req, res, next, repository);
}
