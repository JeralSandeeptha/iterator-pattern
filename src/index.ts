import { NameCollection } from "./classes/NamesCollection.js";

const names = new NameCollection();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

const iterator = names.getIterator();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
};
