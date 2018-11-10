import { inferType } from './test-utils';
import {
  $Call,
  $Keys,
  $Values,
  $ReadOnly,
  $Diff,
  $PropertyType,
  $ElementType,
} from './';

/**
 * Fixtures
 */

type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

/**
 * Tests
 */

describe('utility types', () => {
  it('$Keys', () => {
    // @dts-jest:pass:snap
    inferType<$Keys<Props>>();
  });

  it('$Values', () => {
    // @dts-jest:pass:snap
    inferType<$Values<Props>>();
  });

  it('$ReadOnly', () => {
    // @dts-jest:pass:snap
    inferType<$ReadOnly<Props>>();
  });

  it('$Diff', () => {
    // @dts-jest:pass:snap
    inferType<$Diff<Props, DefaultProps>>();
  });

  it('$PropertyType', () => {
    // @dts-jest:pass:snap
    inferType<$PropertyType<Props, 'name'>>();

    // @dts-jest:pass:snap
    inferType<$PropertyType<[boolean, number], '0'>>();
    // @dts-jest:pass:snap
    inferType<$PropertyType<[boolean, number], '1'>>();
  });

  it('$ElementType', () => {
    // @dts-jest:pass:snap
    inferType<$ElementType<Props, 'name'>>();

    // @dts-jest:pass:snap
    inferType<$ElementType<[boolean, number], 0>>();
    // @dts-jest:pass:snap
    inferType<$ElementType<[boolean, number], 1>>();

    // @dts-jest:pass:snap
    inferType<$ElementType<boolean[], number>>();

    // @dts-jest:pass:snap
    inferType<$ElementType<{ [key: string]: number }, string>>();
  });

  it('$Call', () => {
    // @dts-jest:pass:snap
    inferType<$Call<(amount: number) => { type: 'ADD'; payload: number }>>();

    type ExtractPropType<T extends { prop: any }> = (arg: T) => T['prop'];
    type Obj = { prop: number };
    type PropType = $Call<ExtractPropType<Obj>>;
    // @dts-jest:pass:snap
    inferType<PropType>();
    // type Nope = $Call<ExtractPropType<{ nope: number }>>; // Error: argument doesn't match `Obj`.

    type ExtractReturnType<T extends () => any> = (arg: T) => ReturnType<T>;
    type Fn = () => number;
    type FnReturnType = $Call<ExtractReturnType<Fn>>;
    // @dts-jest:pass:snap
    inferType<FnReturnType>();
  });
});
