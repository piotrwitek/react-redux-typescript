import { testType } from '../utils/test-utils';
import { Primitive, isPrimitive, Falsy, isFalsy } from './aliases-and-guards';

// @dts-jest:group Primitive
{
  // @dts-jest:pass:snap -> Primitive
  testType<Primitive>();
}

// @dts-jest:group isPrimitive
it('narrows to correct type', () => {
  const consumer = (param: Primitive[] | Primitive): string => {
    if (isPrimitive(param)) {
      // @dts-jest:pass:snap -> Primitive
      param;
      return String(param) + ' was Primitive';
    }
    // @dts-jest:pass:snap -> Primitive[]
    param;
    const resultArray = param
      .map(consumer)
      .map(rootString => '\n\t' + rootString);
    return resultArray.reduce((comm, newV) => comm + newV, 'this was nested:');
  };
});

// @dts-jest:group Falsy
{
  // @dts-jest:pass:snap -> Falsy
  testType<Falsy>();
}

// @dts-jest:group isFalsy
it('narrows to correct type', () => {
  const consumer = (param: Falsy | string): string => {
    if (isFalsy(param)) {
      // @dts-jest:pass:snap -> false | 0 | null | undefined
      param;
      return String(param) + ' was Falsy';
    }
    // @dts-jest:pass:snap -> string
    param;
    return param.toString();
  };
});

// @dts-jest:group isFalsy - test falsy values
it('returns true for falsy', () => {
  const falsyTestVals: unknown[] = [false, '', 0, null, undefined];

  const testResults = falsyTestVals.map(isFalsy);
  testResults.forEach(val => expect(val).toBe(true));
});

// @dts-jest:group isFalsy - test truthy values
it('returns false for truthy', () => {
  const truthyTestVals: unknown[] = [' ', true, {}, []];

  const testResults = truthyTestVals.map(isFalsy);
  testResults.forEach(val => expect(val).toBe(false));
});
