import { describe, expect, test } from 'vitest'
import fs from 'fs'
import mock from 'mock-fs'
import createOutputPath, { isNotExistCreateIt } from '../createOutputPath'

describe('createOutputPath', () => {
  test('isNotExistCreateIt', () => {
    mock({ 'some-path': mock.directory({}) });
    isNotExistCreateIt('some-path', 'some-dir')

    expect(fs.existsSync('any-path')).toBe(false)
    expect(fs.existsSync('some-path')).toBe(true)
    expect(fs.existsSync('some-path/any-dir')).toBe(false)
    expect(fs.existsSync('some-path/some-dir')).toBe(true)
  })
})

describe('createOutputPath', () => {
  test('createOutputPath', () => {
    mock({ 'some-path': mock.directory({}) });
    createOutputPath('some-path', 'some-dir/other-dir')

    expect(fs.existsSync('any-path')).toBe(false)
    expect(fs.existsSync('some-path')).toBe(true)
    expect(fs.existsSync('some-path/any-dir')).toBe(false)
    expect(fs.existsSync('some-path/some-dir')).toBe(true)
    expect(fs.existsSync('some-path/some-dir/other-dir')).toBe(true)
    expect(fs.existsSync('some-path/some-dir/another-dir')).toBe(false)
  })
})
