import { StringValueObject } from '../../Shared/domain/value-object/StringValueObject';
import { CourseNameLengthExceeded } from './CourseNameLengthExceeded';

export class CourseName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan30Char(value);
  }

  private ensureLengthIsLessThan30Char(value: string): void {
    if (value.length > 30) throw new CourseNameLengthExceeded(`The course name ${value} is too long`);
  }
}
