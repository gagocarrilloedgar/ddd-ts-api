import validate from 'uuid-validate';
import { InvalidArgumentError } from './InvalidArgumentError';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`${this.constructor.name} is not a valid UUID`);
    }
  }

  toString(): string {
    return this.value;
  }
}
