// dynamically generalize
type GenericArray<T> = Array<T>;

type GenericNumber<T> = Array<T>;

type Coordinates<X, Y> = [X, Y];

const coordinate: Coordinates<number, number> = [1, 3];

// Generic in Interface
