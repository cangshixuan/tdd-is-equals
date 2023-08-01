import { isEquals } from ".";

it("基本类型", () => {
  expect(isEquals(99, 99)).toBe(true);
  expect(isEquals(99, 100)).toBe(false);
  expect(isEquals("test", "test")).toBe(true);
  expect(isEquals("test", "te")).toBe(false);
});

it("参数类型不同", () => {
  expect(isEquals(1, "1")).toBe(false);
  expect(isEquals(1, true)).toBe(false);
  expect(isEquals(0, undefined)).toBe(false);
  expect(isEquals(0, null)).toBe(false);
  expect(isEquals(0, false)).toBe(false);
  expect(isEquals("", false)).toBe(false);
  expect(isEquals(undefined, NaN)).toBe(false);
  expect(isEquals(null, NaN)).toBe(false);
  expect(isEquals(null, undefined)).toBe(false);
  expect(isEquals(null, false)).toBe(false);
  expect(isEquals({}, [])).toBe(false);
});

it("NaN值", () => {
  expect(isEquals(NaN, NaN)).toBe(true);
});

it("-0和+0", () => {
  expect(isEquals(-0, +0)).toBe(true);
  expect(isEquals(0, +0)).toBe(true);
  expect(isEquals(-0, 0)).toBe(true);
});

it("对象类型", () => {
  expect(
    isEquals({ test: "666", test2: 888 }, { test: "666", test2: 888 })
  ).toBe(true);
  expect(
    isEquals({ test: "66", test2: 888 }, { test: "666", test2: 888 })
  ).toBe(false);
  expect(isEquals({ test: "666", test2: 888 }, { test: "666" })).toBe(false);
  expect(
    isEquals({ test: 1, test2: [10, 20] }, { test: 1, test2: [10, 20] })
  ).toBe(true);
  expect(isEquals([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(isEquals([1, 2, "3"], [1, 2, 3])).toBe(false);
});
