import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreateorRequest } from '../domain/CourseCreateorRequest';
import { CourseId } from '../../Shared/domain/Courses/CourseId';
import { CourseName } from '../domain/CourseName';
import { CourseDuration } from '../domain/CourseDuration';

export class CourseCreator {
  private readonly repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this.repository = repository;
  }

  async run(courseRequest: CourseCreateorRequest): Promise<void> {
    const course = new Course({
      id: new CourseId(courseRequest.id),
      name: new CourseName(courseRequest.name),
      duration: new CourseDuration(courseRequest.duration)
    });

    return this.repository.save(course);
  }
}
