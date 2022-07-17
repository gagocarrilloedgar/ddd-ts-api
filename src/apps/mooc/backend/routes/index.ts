import { Router, Response, Request, NextFunction } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import glob from 'glob';
import httpStatus from 'http-status';

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/**/*.route.*');
  routes.forEach(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    next();
  }

  const errors = validationErrors.array().map((error: ValidationError) => ({ [error.param]: error.msg }));

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ errors });
}
