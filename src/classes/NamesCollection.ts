import { NameIterator } from "./NameIterator.js";

export class NameCollection {
  private names: string[] = [];

  add(name: string) {
    this.names.push(name);
  }

  getIterator(): Iterator<string> {
    return new NameIterator(this.names);
  }
};
