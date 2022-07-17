import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreateorRequest } from '../domain/CourseCreateorRequest';
import { Uuid } from '../../Shared/domain/value-object/Uuid';

export class CourseCreator {
  private readonly repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(courseRequest: CourseCreateorRequest): Promise<void> {
    const course = new Course({
      id: new Uuid(courseRequest.id),
      name: courseRequest.name,
      duration: courseRequest.duration
    });

    return this.repository.save(course);
  }
}
