function getParamType(param: unknown) {
  return Object.prototype.toString.call(param);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEquals(a: any, b: any): boolean {
  const typeA = getParamType(a);
  const typeB = getParamType(b);
  if (typeA !== typeB) {
    return false;
  }

  if (typeA === "[object Object]" || typeA === "[object Array]") {
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!isEquals(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  if (typeA === "[object Number]" && Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  return a === b;
}
