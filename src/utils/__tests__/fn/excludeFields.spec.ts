import { describe, expect, test } from 'vitest'
import { excludeFields } from '../../fn'

describe('excludeFields', () => {
  test('this is not created_at field', () => {   
    expect(excludeFields('created_at')).toBeFalsy()
  })

  test('this is not updated_at field', () => {   
    expect(excludeFields('updated_at')).toBeFalsy()
  })

  test('this is not deleted_at field', () => {   
    expect(excludeFields('deleted_at')).toBeFalsy()
  })

  test('this is another field', () => {   
    expect(excludeFields('another_field')).toBeTruthy()
  })
})
