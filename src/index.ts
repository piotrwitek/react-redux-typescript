/**
 * @author Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
 * @copyright Copyright (c) 2016 Piotr Witek
 * @license MIT
 */

export {
  $Call,
  $Diff,
  $ElementType,
  $Keys,
  $NonMaybeType,
  $PropertyType,
  $ReadOnly,
  $Shape,
  $Values,
  Class,
} from './utility-types';

export {
  Assign,
  Brand,
  DeepNonNullable,
  DeepOptional,
  DeepPartial,
  DeepReadonly,
  DeepRequired,
  Diff,
  FunctionKeys,
  Intersection,
  AugmentedMutable as Mutable,
  MutableKeys,
  NonFunctionKeys,
  NonUndefined,
  Omit,
  OmitByValue,
  OmitByValueExact,
  Optional,
  OptionalKeys,
  Overwrite,
  AugmentedPartial as Partial,
  PickByValue,
  PickByValueExact,
  PromiseType,
  AugmentedReadonly as Readonly,
  ReadonlyKeys,
  AugmentedRequired as Required,
  RequiredKeys,
  SetComplement,
  SetDifference,
  SetIntersection,
  Subtract,
  SymmetricDifference,
  Unionize,
  UnionToIntersection,
  ValuesType,
  Writable,
  WritableKeys,
} from './mapped-types';

export {
  Falsy,
  Falsy as Falsey, // deprecated in v3, backward compatibility until v4
  isFalsy,
  Nullish,
  isNullish,
  Primitive,
  isPrimitive,
} from './aliases-and-guards';

// deprecated
export { getReturnOfExpression } from './functional-helpers';
