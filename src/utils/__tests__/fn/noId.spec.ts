import { describe, expect, test } from 'vitest'
import { noId } from '../../fn'

describe('notId', () => {
  test('this is not id', () => {
    expect(noId('di')).toBeTruthy()
  })
  
  test('this is id', () => {
    expect(noId('id')).toBeFalsy()
  })
})
