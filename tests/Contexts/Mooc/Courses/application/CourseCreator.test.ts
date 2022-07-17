import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { Uuid } from '../../../../../src/Contexts/Mooc/Shared/domain/value-object/Uuid';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {
    const id = new Uuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a');
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Course({ id, name, duration });

    await creator.run({ id: id.value, name, duration });

    repository.assertLastSavedCourseIs(course);
  });
});
