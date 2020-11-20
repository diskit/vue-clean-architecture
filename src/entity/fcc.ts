export abstract class FCC<T> implements Iterable<T> {
  constructor(readonly values: T[]) {}

  [Symbol.iterator](): Iterator<T> {
    return this.values[Symbol.iterator]();
  }

  map<R>(converter: (value: T, index: number, array: T[]) => R, thisArg?: any): R[] {
    return this.values.map(converter, thisArg);
  }  
}
