import { SetComplement, DeepReadonly } from './mapped-types';

/**
 * $Keys
 * @desc get the union type of all the keys in an object type `T`
 * @see https://flow.org/en/docs/types/utilities/#toc-keys
 */
export type $Keys<T extends object> = keyof T;

/**
 * $Values
 * @desc get the union type of all the values in an object type `T`
 * @see https://flow.org/en/docs/types/utilities/#toc-values
 */
export type $Values<T extends object> = T[keyof T];

/**
 * $ReadOnly
 * @desc get the read-only version of a given object type `T` (it works on nested data structure)
 * @see https://flow.org/en/docs/types/utilities/#toc-readonly
 */
export type $ReadOnly<T extends object> = DeepReadonly<T>;

/**
 * $Diff
 * @desc get the set difference of a given object types `T` and `U` (`T \ U`)
 * @see https://flow.org/en/docs/types/utilities/#toc-diff
 */
export type $Diff<T extends U, U extends object> = Pick<
  T,
  SetComplement<keyof T, keyof U>
>;

/**
 * $PropertyType
 * @desc get the type of property of an object at a given key `K`
 * @see https://flow.org/en/docs/types/utilities/#toc-propertytype
 */
export type $PropertyType<T extends object, K extends keyof T> = T[K];

/**
 * $ElementType
 * @desc get the type of elements inside of array, tuple or object of type `T`, that matches the given index type `K`
 * @see https://flow.org/en/docs/types/utilities/#toc-elementtype
 */
export type $ElementType<
  T extends { [P in K & any]: any },
  K extends keyof T | number
> = T[K];

/**
 * $Call
 * @desc get the return type from a given typeof expression
 * @see https://flow.org/en/docs/types/utilities/#toc-call
 */
export type $Call<Fn extends (...args: any[]) => any> = Fn extends (
  arg: any
) => infer RT
  ? RT
  : never;

/**
 * $Shape
 * @desc Copies the shape of the type supplied, but marks every field optional.
 * @see https://flow.org/en/docs/types/utilities/#toc-shape
 */
export type $Shape<T extends object> = Partial<T>;

/**
 * $NonMaybeType
 * @desc Excludes null and undefined from T
 * @see https://flow.org/en/docs/types/utilities/#toc-nonmaybe
 */
export type $NonMaybeType<T> = NonNullable<T>;

/**
 * Class
 * @desc Represents constructor of type T
 * @see https://flow.org/en/docs/types/utilities/#toc-class
 */
export type Class<T> = new (...args: any[]) => T;
