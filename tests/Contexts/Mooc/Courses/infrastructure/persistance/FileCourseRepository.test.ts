import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistance/FileCourseRepository';
import { Uuid } from '../../../../../../src/Contexts/Mooc/Shared/domain/value-object/Uuid';

describe('FileCouseRepository', () => {
  it('should save a course', async () => {
    const expectedCourse = new Course({
      id: new Uuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a'),
      name: 'some-name',
      duration: 'some-duration'
    });
    const repository = new FileCourseRepository();

    await repository.save(expectedCourse);

    const course = await repository.search('ef8ac118-8d7f-49cc-abec-78e0d05af80a');

    expect(course).toEqual(expectedCourse);
  });
});
