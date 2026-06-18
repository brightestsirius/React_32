import { describe, it, expect } from "vitest"
import { getPages } from "../PostsPagination"

describe("getPages", () => {
  it("показує всі сторінки якщо їх 7 або менше", () => {
    expect(getPages(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(getPages(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it("показує еліпсис в кінці на першій сторінці", () => {
    expect(getPages(1, 10)).toEqual([1, 2, "...", 10])
  })

  it("показує еліпсис з обох боків на середній сторінці", () => {
    expect(getPages(5, 10)).toEqual([1, "...", 4, 5, 6, "...", 10])
  })

  it("показує еліпсис на початку на останній сторінці", () => {
    expect(getPages(10, 10)).toEqual([1, "...", 9, 10])
  })
})
