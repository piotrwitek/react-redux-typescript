import { testType } from '../utils/test-utils';
import {
  SetIntersection,
  SetDifference,
  SetComplement,
  SymmetricDifference,
  FunctionKeys,
  NonUndefined,
  NonFunctionKeys,
  Omit,
  PickByValue,
  OmitByValue,
  Intersection,
  Diff,
  Subtract,
  Overwrite,
  Assign,
  Unionize,
  PromiseType,
  DeepReadonly,
  DeepRequired,
  DeepNonNullable,
  DeepPartial,
  MutableKeys,
  ReadonlyKeys,
  Brand,
  _DeepNonNullableArray,
  _DeepNonNullableObject,
  _DeepReadonlyArray,
  _DeepReadonlyObject,
  _DeepRequiredArray,
  _DeepRequiredObject,
  _DeepPartialObject,
  _DeepPartialArray,
  RequiredKeys,
  OptionalKeys,
  PickByValueExact,
  OmitByValueExact,
  AugmentedPartial,
  ValuesType,
  AugmentedRequired,
  UnionToIntersection,
  AugmentedMutable,
  AugmentedReadonly,
} from './mapped-types';

/**
 * Fixtures
 */

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };
type NewProps = { age: string; other: string };
type MixedProps = {
  name: string;
  setName: (name: string) => void;
  someKeys?: string;
  someFn?: (...args: any) => any;
};
type ReadWriteProps = { readonly a: number; b: string };
type RequiredOptionalProps = {
  req: number;
  reqUndef: number | undefined;
  opt?: string;
  optUndef?: string | undefined;
};

/**
 * Tests
 */

// @dts-jest:group SetIntersection
{
  // @dts-jest:pass:snap
  testType<SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>>();
  // @dts-jest:pass:snap
  testType<SetIntersection<string | number | (() => void), () => void>>();
}

// @dts-jest:group SetDifference
{
  // @dts-jest:pass:snap
  testType<SetDifference<'1' | '2' | '3', '2' | '3' | '4'>>();
  // @dts-jest:pass:snap
  testType<SetDifference<string | number | (() => void), () => void>>();
}

// @dts-jest:group SetComplement
{
  // @dts-jest:pass:snap
  testType<SetComplement<'1' | '2' | '3', '2' | '3'>>();
}

// @dts-jest:group SymmetricDifference
{
  // @dts-jest:pass:snap
  testType<SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>>();
}

// @dts-jest:group NonUndefined
{
  // @dts-jest:pass:snap
  testType<NonUndefined<string | null | undefined>>();
  // @dts-jest:pass:snap
  testType<NonUndefined<undefined>>();
}

// @dts-jest:group FunctionKeys
{
  // @dts-jest:pass:snap
  testType<FunctionKeys<MixedProps>>();
}

// @dts-jest:group NonFunctionKeys
{
  // @dts-jest:pass:snap
  testType<NonFunctionKeys<MixedProps>>();
}

// @dts-jest:group MutableKeys
{
  // @dts-jest:pass:snap
  testType<MutableKeys<ReadWriteProps>>();
}

// @dts-jest:group ReadonlyKeys
{
  // @dts-jest:pass:snap
  testType<ReadonlyKeys<ReadWriteProps>>();
}

// @dts-jest:group RequiredKeys
{
  // @dts-jest:pass:snap
  testType<RequiredKeys<RequiredOptionalProps>>();
}

// @dts-jest:group OptionalKeys
{
  // @dts-jest:pass:snap
  testType<OptionalKeys<RequiredOptionalProps>>();
}

// @dts-jest:group PickByValue
{
  // @dts-jest:pass:snap
  testType<PickByValue<RequiredOptionalProps, number>>();
  // @dts-jest:pass:snap
  testType<PickByValue<RequiredOptionalProps, number | undefined>>();
  // @dts-jest:pass:snap
  testType<PickByValue<RequiredOptionalProps, undefined>>();
  // @dts-jest:pass:snap
  testType<keyof PickByValue<RequiredOptionalProps, number>>();

  const fn = <T extends Props>(props: T) => {
    // @dts-jest:pass:snap
    testType<PickByValue<T, number>>();
  };
}

// @dts-jest:group PickByValueExact
{
  // @dts-jest:pass:snap
  testType<PickByValueExact<RequiredOptionalProps, number>>();
  // @dts-jest:pass:snap
  testType<PickByValueExact<RequiredOptionalProps, number | undefined>>();
  // @dts-jest:pass:snap
  testType<PickByValueExact<RequiredOptionalProps, undefined>>();
  // @dts-jest:pass:snap
  testType<keyof PickByValueExact<RequiredOptionalProps, number>>();

  const fn = <T extends Props>(props: T) => {
    // @dts-jest:pass:snap
    testType<PickByValueExact<T, number>>();
  };
}

// @dts-jest:group Omit
{
  // @dts-jest:pass:snap
  testType<Omit<Props, 'age'>>();
  // @dts-jest:pass:snap
  testType<Omit<Props | NewProps, 'age'>>();

  const fn = <T extends Props>(props: T) => {
    // @dts-jest:pass:snap
    testType<Omit<T, 'age'>>();

    const { age, ...rest } = props;
    // @dts-jest:pass:snap
    const result: Omit<T, 'age'> = rest;
  };
}

// @dts-jest:group OmitByValue
{
  // @dts-jest:pass:snap
  testType<OmitByValue<RequiredOptionalProps, number>>();
  // @dts-jest:pass:snap
  testType<OmitByValue<RequiredOptionalProps, number | undefined>>();
  // @dts-jest:pass:snap
  testType<OmitByValue<RequiredOptionalProps, undefined>>();
  // @dts-jest:pass:snap
  testType<keyof OmitByValue<RequiredOptionalProps, number>>();

  const fn = <T extends Props>(props: T) => {
    // @dts-jest:pass:snap
    testType<OmitByValue<T, string | boolean>>();
  };
}

// @dts-jest:group OmitByValueExact
{
  // @dts-jest:pass:snap
  testType<OmitByValueExact<RequiredOptionalProps, number>>();
  // @dts-jest:pass:snap
  testType<OmitByValueExact<RequiredOptionalProps, number | undefined>>();
  // @dts-jest:pass:snap
  testType<OmitByValueExact<RequiredOptionalProps, undefined>>();
  // @dts-jest:pass:snap
  testType<keyof OmitByValueExact<RequiredOptionalProps, number>>();

  const fn = <T extends Props>(props: T) => {
    // @dts-jest:pass:snap
    testType<OmitByValueExact<T, number>>();
  };
}

// @dts-jest:group Intersection
{
  // @dts-jest:pass:snap
  testType<Intersection<Props, DefaultProps>>();
  // @dts-jest:pass:snap
  testType<Intersection<Props | NewProps, DefaultProps>>();

  const fn = <T extends Props>(props: T) => {
    const { age, ...rest } = props;
    // @dts-jest:pass:snap
    const result: Intersection<T, Omit<T, 'age'>> = rest;
  };
}

// @dts-jest:group Diff
{
  // @dts-jest:pass:snap
  testType<Diff<Props, NewProps>>();

  const fn = <T extends Props>(props: T) => {
    const { age, ...rest } = props;
    // @dts-jest:pass:snap
    const result: Diff<T, Pick<T, 'age'>> = rest;
  };
}

// @dts-jest:group Subtract
{
  // @dts-jest:pass:snap
  testType<Subtract<Props, DefaultProps>>();

  const fn = <T extends Props>(props: T) => {
    const { age, ...rest } = props;
    // @dts-jest:pass:snap
    const result: Subtract<T, Pick<T, 'age'>> = rest;
  };
}

// @dts-jest:group Overwrite
{
  // @dts-jest:pass:snap
  testType<Overwrite<Props, NewProps>>();

  const fn = <T extends Props>(props: T) => {
    const { age, ...rest } = props;
    // @dts-jest:pass:snap
    const result: Overwrite<Omit<T, 'age'>, T> = rest;
  };
}

// @dts-jest:group Assign
{
  // @dts-jest:pass:snap
  testType<Assign<Props, NewProps>>();

  const fn = <T extends Props>(props: T) => {
    const { age, ...rest } = props;
    // @dts-jest:pass:snap
    const result: Assign<{}, Omit<T, 'age'>> = rest;
  };
}

// @dts-jest:group Unionize
{
  // @dts-jest:pass:snap
  testType<Unionize<Props>>();
}

// @dts-jest:group PromiseType
{
  // @dts-jest:pass:snap
  testType<PromiseType<Promise<string>>>();
}

// @dts-jest:group DeepReadonly
{
  type NestedProps = {
    first: {
      second: {
        name: string;
      };
    };
  };
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedProps>['first']['second']['name']>();

  type NestedArrayProps = {
    first: {
      second: Array<{ name: string }>;
    };
  };
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedArrayProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedArrayProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedArrayProps>['first']['second'][number]['name']>();

  type NestedFunctionProps = {
    first: {
      second: (value: number) => string;
    };
  };
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedFunctionProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepReadonly<NestedFunctionProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<ReturnType<DeepReadonly<NestedFunctionProps>['first']['second']>>();

  // @dts-jest:pass:snap
  testType<DeepReadonly<DeepReadonly<NestedProps>>>();
  // @dts-jest:pass:snap
  testType<DeepReadonly<DeepReadonly<NestedArrayProps>>>();

  // @dts-jest:pass:snap
  testType<DeepReadonly<string | null | boolean | number | bigint | symbol>>();
}

// @dts-jest:group DeepRequired
{
  type NestedProps = {
    first?: {
      second?: {
        name?: string | null;
      };
    };
  };
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedProps>['first']['second']['name']>();

  type NestedArrayProps = {
    first?: {
      second?: Array<{ name?: string | null } | undefined>;
    };
  };
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedArrayProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedArrayProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedArrayProps>['first']['second'][number]['name']>();

  type NestedFunctionProps = {
    first?: {
      second?: (value: number) => string;
    };
  };
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedFunctionProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepRequired<NestedFunctionProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<ReturnType<DeepRequired<NestedFunctionProps>['first']['second']>>();
}

// @dts-jest:group DeepNonNullable
{
  type NestedProps = {
    first?: null | {
      second?: null | {
        name?: null | string;
      };
    };
  };
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedProps>['first']['second']['name']>();

  type NestedArrayProps = {
    first?: null | {
      second?: Array<{ name?: string | null } | undefined | null>;
    };
  };
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedArrayProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedArrayProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<
    DeepNonNullable<NestedArrayProps>['first']['second'][number]['name']
  >();

  type NestedFunctionProps = {
    first?: null | {
      second?: (value: number) => string;
    };
  };
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedFunctionProps>['first']>();
  // @dts-jest:pass:snap
  testType<DeepNonNullable<NestedFunctionProps>['first']['second']>();
  // @dts-jest:pass:snap
  testType<
    ReturnType<DeepNonNullable<NestedFunctionProps>['first']['second']>
  >();
}

// @dts-jest:group DeepPartial
{
  type NestedProps = {
    first: {
      second: {
        name: string;
      };
    };
  };
  const partialNested: DeepPartial<NestedProps> = {} as any;
  // @dts-jest:pass:snap
  testType<typeof partialNested.first>();

  const second = partialNested.first!.second;
  // @dts-jest:pass:snap
  testType<typeof second>();

  const name = second!.name;
  // @dts-jest:pass:snap
  testType<typeof name>();

  type NestedArrayProps = {
    first: {
      second: Array<{ name: string }>;
    };
  };

  const nestedArrayPartial: DeepPartial<NestedArrayProps> = {};
  // @dts-jest:pass:snap
  testType<typeof nestedArrayPartial.first>();

  const arrayProp = nestedArrayPartial.first!.second;
  // @dts-jest:pass:snap
  testType<typeof arrayProp>();

  const arrayItem = arrayProp![0];
  // @dts-jest:pass:snap
  testType<typeof arrayItem.name>();

  type NestedFunctionProps = {
    first: {
      second: (value: number) => string;
    };
  };
  const nestedFunctionPartial: DeepPartial<NestedFunctionProps> = {};
  // @dts-jest:pass:snap
  testType<typeof nestedFunctionPartial.first>();

  const functionProp = nestedFunctionPartial.first!.second;
  // @dts-jest:pass:snap
  testType<typeof functionProp>();
  // @dts-jest:pass:snap
  testType<ReturnType<NonNullable<typeof functionProp>>>();
}

// @dts-jest:group Brand
{
  // @dts-jest:pass:snap
  testType<Brand<number, 'USD'>>();
}

// @dts-jest:group Optional
{
  // @dts-jest:pass:snap
  testType<AugmentedPartial<Props>>({});
  // @dts-jest:pass:snap
  testType<AugmentedPartial<Props>>({ age: 99 });

  // @dts-jest:pass:snap
  testType<AugmentedPartial<Props, 'age' | 'visible'>>({ name: 'Yolo' });
  // @dts-jest:pass:snap
  testType<AugmentedPartial<Props, 'age' | 'visible'>>({
    name: 'Yolo',
    age: 99,
  });
}

// @dts-jest:group ValuesType
{
  // @dts-jest:pass:snap
  testType<ValuesType<Props>>();

  // @dts-jest:pass:snap
  testType<ValuesType<number[]>>();
  // @dts-jest:pass:snap
  testType<ValuesType<readonly symbol[]>>();
  // @dts-jest:pass:snap
  testType<ValuesType<ReadonlyArray<string>>>();

  // @dts-jest:pass:snap
  testType<ValuesType<[1, 2]>>();
  // @dts-jest:pass:snap
  testType<ValuesType<readonly [1, 2]>>();

  // @dts-jest:pass:snap
  testType<ValuesType<Uint8Array>>();
  // @dts-jest:pass:snap
  testType<ValuesType<Uint16Array>>();
  // @dts-jest:pass:snap
  testType<ValuesType<Uint32Array>>();
}

// @dts-jest:group AugmentedRequired
{
  // @dts-jest:pass:snap
  testType<AugmentedRequired<Partial<Props>>>({
    name: 'Yolo',
    age: 99,
    visible: true,
  });

  // @dts-jest:pass:snap
  testType<AugmentedRequired<Partial<Props>, 'age' | 'visible'>>({
    age: 99,
    visible: true,
  });
}

// @dts-jest:group UnionToIntersection
{
  // @dts-jest:pass:snap
  testType<
    UnionToIntersection<
      { name: string } | { age: number } | { visible: boolean }
    >
  >({
    name: 'Yolo',
    age: 99,
    visible: true,
  });

  // @dts-jest:pass:snap
  testType<UnionToIntersection<boolean>>();

  // @dts-jest:pass:snap
  testType<UnionToIntersection<true | false>>();

  // @dts-jest:pass:snap
  testType<UnionToIntersection<'name' | 'age'>>();
}

// @dts-jest:group AugmentedMutable
{
  // @dts-jest:pass:snap
  testType<AugmentedMutable<Readonly<Props>>>({
    name: 'Yolo',
    age: 99,
    visible: true,
  });

  // @dts-jest:pass:snap
  testType<AugmentedMutable<Readonly<Props>, 'name' | 'age'>>({
    name: 'Yolo',
    age: 99,
    visible: true,
  });

  // @dts-jest:pass:snap
  testType<AugmentedMutable<Readonly<Props>>['name']>('Yolo');

  // @dts-jest:pass:snap
  testType<AugmentedMutable<Readonly<Props>>['age']>(99);

  // @dts-jest:pass:snap
  testType<AugmentedMutable<Readonly<Props>>['visible']>(true);
}

// @dts-jest:group AugmentedReadonly
{
  // @dts-jest:pass:snap
  testType<AugmentedReadonly<Props>>({
    name: 'Yolo',
    age: 99,
    visible: true,
  });

  // @dts-jest:pass:snap
  testType<AugmentedReadonly<Props, 'name' | 'age'>>({
    name: 'Yolo',
    age: 99,
    visible: true,
  });

  // @dts-jest:pass:snap
  testType<ReadonlyKeys<AugmentedReadonly<Props, 'name' | 'age'>>>();

  // @dts-jest:pass:snap
  testType<AugmentedReadonly<Props>['name']>();

  // @dts-jest:pass:snap
  testType<AugmentedReadonly<Props>['age']>();

  // @dts-jest:pass:snap
  testType<AugmentedReadonly<Props>['visible']>();
}
