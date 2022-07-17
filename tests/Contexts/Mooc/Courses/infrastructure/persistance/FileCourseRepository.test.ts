import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseName } from '../../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistance/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid';

describe('FileCouseRepository', () => {
  it('should save a course', async () => {
    const repository = new FileCourseRepository();

    const expectedCourse = new Course({
      id: new Uuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a'),
      name: new CourseName('some-name'),
      duration: new CourseDuration('some-duration')
    });

    await repository.save(expectedCourse);

    const course = await repository.search('ef8ac118-8d7f-49cc-abec-78e0d05af80a');

    expect(course).toEqual(expectedCourse);
  });
});
