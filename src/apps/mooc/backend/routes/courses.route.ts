//** Exporess imports */
import { Router, Request, Response } from 'express';

//** Third party imports */
import { body } from 'express-validator';

//** Custom Middlewares */
import { validateReqSchema } from '.';

// ** Depency injection container*/
import container from '../dependency-injection';

//** Specific Controller imports */
import { CoursePutController } from '../controllers/CoursePutController';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString().isUUID(),
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  const coursePutController: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    coursePutController.run(req, res)
  );
};
