export class NameIterator implements Iterator<string> {
  private index = 0;

  constructor(private names: string[]) {}

  next(): IteratorResult<string> {
    if (this.index < this.names.length) {
      return {
        value: this.names[this.index++]!,
        done: false,
      };
    }

    return {
      value: undefined as any,
      done: true,
    };
  }

  hasNext(): boolean {
    return this.index < this.names.length;
  }
};
