/**
 * Credits to all the people who given inspiration and shared some very usefull code snippets
 * in the following github issue: https://github.com/Microsoft/TypeScript/issues/12215
 */

/**
 * SetIntersection (same as Extract)
 * @desc Set intersection of given union types `A` and `B`
 */
export type SetIntersection<A, B> = A extends B ? A : never;

/**
 * SetDifference (same as Exclude)
 * @desc Set difference of given union types `A` and `B`
 */
export type SetDifference<A, B> = A extends B ? never : A;

/**
 * SetComplement
 * @desc Set complement of given union types `A` and (it's subset) `A1`
 */
export type SetComplement<A, A1 extends A> = SetDifference<A, A1>;

/**
 * SymmetricDifference
 * @desc Set difference of union and intersection of given union types `A` and `B`
 */
export type SymmetricDifference<A, B> = SetDifference<A | B, A & B>;

/**
 * NonUndefined
 * @desc Exclude undefined from set `A`
 */
export type NonUndefined<A> = A extends undefined ? never : A;

/**
 * FunctionKeys
 * @desc get union type of keys that are functions in object type `T`
 */
export type FunctionKeys<T extends object> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];

/**
 * NonFunctionKeys
 * @desc get union type of keys that are non-functions in object type `T`
 */
export type NonFunctionKeys<T extends object> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

/**
 * Omit (complements Pick)
 * @desc From `T` remove a set of properties `K`
 */
export type Omit<T extends object, K extends keyof T> = T extends any
  ? Pick<T, SetDifference<keyof T, K>>
  : never;

/**
 * Intersection
 * @desc From `T` pick properties that exist in `U`
 */
export type Intersection<T extends object, U extends object> = T extends any
  ? Pick<T, SetIntersection<keyof T, keyof U>>
  : never;

/**
 * Diff
 * @desc From `T` remove properties that exist in `U`
 */
export type Diff<T extends object, U extends object> = Pick<
  T,
  SetDifference<keyof T, keyof U>
>;

/**
 * Subtract
 * @desc From `T` remove properties that exist in `T1` (`T1` is a subtype of `T`)
 */
export type Subtract<T extends T1, T1 extends object> = Pick<
  T,
  SetComplement<keyof T, keyof T1>
>;

/**
 * Overwrite
 * @desc From `U` overwrite properties to `T`
 */
export type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;

/**
 * Assign
 * @desc From `U` assign properties to `T` (just like object assign)
 */
export type Assign<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T> & Diff<U, T>
> = Pick<I, keyof I>;

/**
 * Exact
 * @desc create branded object type for exact type matching
 */
export type Exact<A extends object> = A & { __brand: keyof A };

/**
 * Unionize
 * @desc Disjoin object to form union of objects, each with single property
 */
export type Unionize<T extends object> = {
  [P in keyof T]: { [Q in P]: T[P] }
}[keyof T];

/**
 * PromiseType
 * @desc Obtain Promise resolve type
 */
export type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

/**
 * DeepReadonly
 * @desc Readonly that works for deeply nested structure
 */
export type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepReadonlyArray<T[number]>
  : T extends object
  ? _DeepReadonlyObject<T>
  : T;

// TODO: inline _DeepReadonlyArray with infer in DeepReadonly, same for all other deep types
/**
 * DeepReadonlyArray
 * @desc Nested array condition handler
 * @private
 */
// tslint:disable-next-line:class-name
export interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

/**
 * DeepReadonlyObject
 * @desc Nested object condition handler
 * @private
 */
export type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
};

/**
 * DeepRequired
 * @desc Required that works for deeply nested structure
 */
export type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepRequiredArray<T[number]>
  : T extends object
  ? _DeepRequiredObject<T>
  : T;

/**
 * DeepRequiredArray
 * @desc Nested array condition handler
 * @private
 */
// tslint:disable-next-line:class-name
export interface _DeepRequiredArray<T>
  extends Array<DeepRequired<NonUndefined<T>>> {}

/**
 * DeepRequiredObject
 * @desc Nested object condition handler
 * @private
 */
export type _DeepRequiredObject<T> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>
};

/**
 * DeepNonNullable
 * @desc NonNullable that works for deeply nested structure
 */
export type DeepNonNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepNonNullableArray<T[number]>
  : T extends object
  ? _DeepNonNullableObject<T>
  : T;

/**
 * DeepNonNullableArray
 * @desc Nested array condition handler
 * @private
 */
// tslint:disable-next-line:class-name
export interface _DeepNonNullableArray<T>
  extends Array<DeepNonNullable<NonNullable<T>>> {}

/**
 * DeepNonNullableObject
 * @desc Nested object condition handler
 * @private
 */
export type _DeepNonNullableObject<T> = {
  [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>
};
