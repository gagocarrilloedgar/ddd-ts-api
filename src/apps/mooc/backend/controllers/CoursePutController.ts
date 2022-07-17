import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';
import { Controller } from './Controller';

export class CoursePutController implements Controller {
  constructor(private courseCreator: CourseCreator) {}

  async run(_req: Request, res: Response) {
    const { id, name, duration } = _req.body;
    await this.courseCreator.run({ id, name, duration });

    res.status(httpStatus.CREATED).send();
  }
}
