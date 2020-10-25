import { testType } from '../utils/test-utils';
import {
  $Call,
  $Keys,
  $Values,
  $ReadOnly,
  $Diff,
  $PropertyType,
  $ElementType,
  $Shape,
  $NonMaybeType,
  $ObjMap,
  Class,
  mixed,
} from './utility-types';
import { _DeepReadonlyObject } from './mapped-types';
/**
 * Fixtures
 */

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };
type MappingProps = {
  foo: () => boolean;
  bar: () => string;
  baz: string;
};

class Foo {}

/**
 * Tests
 */

// @dts-jest:group $Keys
{
  // @dts-jest:pass:snap
  testType<$Keys<Props>>();
}

// @dts-jest:group $Values
{
  // @dts-jest:pass:snap
  testType<$Values<Props>>();
}

// @dts-jest:group $ReadOnly
{
  // @dts-jest:pass:snap
  testType<$ReadOnly<Props>>();
}

// @dts-jest:group $Diff
{
  // @dts-jest:pass:snap
  testType<$Diff<Props, DefaultProps>>();
}

// @dts-jest:group $PropertyType
{
  // @dts-jest:pass:snap
  testType<$PropertyType<Props, 'name'>>();

  // @dts-jest:pass:snap
  testType<$PropertyType<[boolean, number], '0'>>();
  // @dts-jest:pass:snap
  testType<$PropertyType<[boolean, number], '1'>>();
}

// @dts-jest:group $ElementType
{
  // @dts-jest:pass:snap
  testType<$ElementType<Props, 'name'>>();

  // @dts-jest:pass:snap
  testType<$ElementType<[boolean, number], 0>>();
  // @dts-jest:pass:snap
  testType<$ElementType<[boolean, number], 1>>();

  // @dts-jest:pass:snap
  testType<$ElementType<boolean[], number>>();

  // @dts-jest:pass:snap
  testType<$ElementType<{ [key: string]: number }, string>>();
}

// @dts-jest:group $Call
{
  // @dts-jest:pass:snap
  testType<$Call<(amount: number) => { type: 'ADD'; payload: number }>>();

  type ExtractPropType<T extends { prop: any }> = (arg: T) => T['prop'];
  type Obj = { prop: number };
  type PropType = $Call<ExtractPropType<Obj>>;
  // @dts-jest:pass:snap
  testType<PropType>();
  // type Nope = $Call<ExtractPropType<{ nope: number }>>; // Error: argument doesn't match `Obj`.

  type ExtractReturnType<T extends () => any> = (arg: T) => ReturnType<T>;
  type Fn = () => number;
  type FnReturnType = $Call<ExtractReturnType<Fn>>;
  // @dts-jest:pass:snap
  testType<FnReturnType>();
}

// @dts-jest:group $Shape
{
  // @dts-jest:pass:snap
  testType<$Shape<Props>>();
}

// @dts-jest:group $NonMaybeType
{
  // @dts-jest:pass:snap
  testType<$NonMaybeType<string | null | undefined>>();
}

// @dts-jest:group Class
{
  // @dts-jest:pass:snap
  testType<Class<Foo>>();
}

// @dts-jest:group mixed
{
  // @dts-jest:pass:snap
  testType<mixed>();
}

// @dts-jest:group $ObjMap
{
  // @dts-jest:pass:snap -> { foo: boolean; bar: string }
  testType<$ObjMap<MappingProps>>();
}
