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
  _DeepNonNullableArray,
  _DeepNonNullableObject,
  _DeepReadonlyArray,
  _DeepReadonlyObject,
  _DeepRequiredArray,
  _DeepRequiredObject,
} from './mapped-types';

/**
 * Fixtures
 */

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };
type NewProps = { age: string; other: string };
type MixedProps = { name: string; setName: (name: string) => void };

/**
 * Tests
 */

// @dts-jest:group SetIntersection
it('SetIntersection', () => {
  // @dts-jest:pass:snap
  testType<SetIntersection<'1' | '2' | '3', '2' | '3' | '4'>>();
  // @dts-jest:pass:snap
  testType<SetIntersection<string | number | (() => void), () => void>>();
});

// @dts-jest:group SetDifference
it('SetDifference', () => {
  // @dts-jest:pass:snap
  testType<SetDifference<'1' | '2' | '3', '2' | '3' | '4'>>();
  // @dts-jest:pass:snap
  testType<SetDifference<string | number | (() => void), () => void>>();
});

// @dts-jest:group SetComplement
it('SetComplement', () => {
  // @dts-jest:pass:snap
  testType<SetComplement<'1' | '2' | '3', '2' | '3'>>();
});

// @dts-jest:group SymmetricDifference
it('SymmetricDifference', () => {
  // @dts-jest:pass:snap
  testType<SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>>();
});

// @dts-jest:group NonUndefined
it('NonUndefined', () => {
  // @dts-jest:pass:snap
  testType<NonUndefined<'1' | '2' | undefined>>();
  // @dts-jest:pass:snap
  testType<NonUndefined<undefined>>();
});

// @dts-jest:group FunctionKeys
it('FunctionKeys', () => {
  // @dts-jest:pass:snap
  testType<FunctionKeys<MixedProps>>();
});

// @dts-jest:group NonFunctionKeys
it('NonFunctionKeys', () => {
  // @dts-jest:pass:snap
  testType<NonFunctionKeys<MixedProps>>();
});

// @dts-jest:group Omit
it('Omit', () => {
  // @dts-jest:pass:snap
  testType<Omit<Props, 'age'>>();
  // @dts-jest:pass:snap
  testType<Omit<Props | NewProps, 'age'>>();
});

// @dts-jest:group Intersection
it('Intersection', () => {
  // @dts-jest:pass:snap
  testType<Intersection<Props, DefaultProps>>();
  // @dts-jest:pass:snap
  testType<Intersection<Props | NewProps, DefaultProps>>();
});

// @dts-jest:group Diff
it('Diff', () => {
  // @dts-jest:pass:snap
  testType<Diff<Props, NewProps>>();
});

// @dts-jest:group Subtract
it('Subtract', () => {
  // @dts-jest:pass:snap
  testType<Subtract<Props, DefaultProps>>();
});

// @dts-jest:group Overwrite
it('Overwrite', () => {
  // @dts-jest:pass:snap
  testType<Overwrite<Props, NewProps>>();
});

// @dts-jest:group Assign
it('Assign', () => {
  // @dts-jest:pass:snap
  testType<Assign<Props, NewProps>>();
});

// @dts-jest:group Unionize
it('Unionize', () => {
  // @dts-jest:pass:snap
  testType<Unionize<Props>>();
});

// @dts-jest:group PromiseType
it('PromiseType', () => {
  // @dts-jest:pass:snap
  testType<PromiseType<Promise<string>>>();
});

// @dts-jest:group DeepReadonly
it('DeepReadonly', () => {
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
});

// @dts-jest:group DeepRequired
it('DeepRequired', () => {
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
});

// @dts-jest:group DeepNonNullable
it('DeepNonNullable', () => {
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
});
