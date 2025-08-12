export function expectEqualUnorderedArraysStrict<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;

  const sortedA = [...a].sort();
  const sortedB = [...b].sort();

  return sortedA.every((value, index) => value === sortedB[index]);
}

export function arraysEqualUnordered2D(a: number[][], b: number[][]): boolean {
  if (a.length !== b.length) return false;

  const serialize = (arr: number[]) => JSON.stringify([...arr].sort());
  const sortedA = a.map(serialize).sort();
  const sortedB = b.map(serialize).sort();

  return sortedA.every((value, index) => value === sortedB[index]);
}