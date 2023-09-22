import { describe, expect, test } from 'vitest'
import { addCommaToArr } from '../../fn'

describe('addCommaToArr', () => {
  test('xxx', () => {   
    const arr = ['foo','bar','baz']
    const withComma = ', '
    const withoutComma = ''

    expect(addCommaToArr(arr, 0)).toBe(withComma)
    expect(addCommaToArr(arr, 1)).toBe(withComma)
    expect(addCommaToArr(arr, 2)).toBe(withoutComma)
    expect(addCommaToArr(arr, 0, 1)).toBe(withComma)
    expect(addCommaToArr(arr, 1, 1)).not.toBe(withComma)
    expect(addCommaToArr(arr, 1, 1)).toBe(withoutComma)
    expect(addCommaToArr(arr, 2, 1)).not.toBe(withComma)
    expect(addCommaToArr(arr, 2, 1)).toBe(withoutComma)
    expect(addCommaToArr(arr, 0, 2)).not.toBe(withComma)
    expect(addCommaToArr(arr, 0, 2)).toBe(withoutComma)    
    expect(addCommaToArr(arr, 1, 2)).not.toBe(withComma)
    expect(addCommaToArr(arr, 1, 2)).toBe(withoutComma)
    expect(addCommaToArr(arr, 2, 2)).not.toBe(withComma)
    expect(addCommaToArr(arr, 2, 2)).toBe(withoutComma)
  })
})

