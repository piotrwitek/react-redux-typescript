// Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)

/**
 * @function getReturnOfExpression
 * @deprecated from TS v2.8 use built-in ReturnType<T> or $Call API
 * @description infer the return type from a given "expression" (at runtime it's equivalent of "noop")
 * @template RT - ReturnType
 * @param expression: (...params: any[]) => RT
 * @returns undefined as RT
 */
export function getReturnOfExpression<RT>(
  expression: (...params: any[]) => RT
): RT {
  return (undefined as any) as RT;
}
