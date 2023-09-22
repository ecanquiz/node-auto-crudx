import { describe, expect, test } from 'vitest'
import { noIdAndExcludeFields } from '../../fn'

describe('noIdAndExcludeFields', () => {
  test('this is not id', () => {
    expect(noIdAndExcludeFields('di')).toBeTruthy()
  })
  
  test('this is id', () => {
    expect(noIdAndExcludeFields('id')).toBeFalsy()
  })

  test('this is not created_at field', () => {   
    expect(noIdAndExcludeFields('created_at')).toBeFalsy()
  })

  test('this is not updated_at field', () => {   
    expect(noIdAndExcludeFields('updated_at')).toBeFalsy()
  })

  test('this is not deleted_at field', () => {   
    expect(noIdAndExcludeFields('deleted_at')).toBeFalsy()
  })

  test('this is another field', () => {   
    expect(noIdAndExcludeFields('another_field')).toBeTruthy()
  })
})
