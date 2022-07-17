import { Uuid } from '../../Shared/domain/value-object/Uuid';

export class Course {
  readonly id: Uuid;
  readonly name: string;
  readonly duration: string;

  constructor({ id, name, duration }: { id: Uuid; name: string; duration: string }) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
}
