import { describe, expect, test } from 'vitest'
import { camelCase, uCamelCase } from '../nomenclature'

describe('Nomenclature', () => {
  test('camelCase & uCamelCase', () => {
    expect(camelCase('any_character_string')).toBe('anyCharacterString')
    expect(uCamelCase('any_character_string')).toBe('AnyCharacterString')
  })
})
