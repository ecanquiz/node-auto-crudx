import { describe, expect, test, vi } from 'vitest'
import mock from 'mock-fs'
import rendering from '../rendering'
import fs from 'fs'

vi.mock('../../config/output', () => {
  return {
    pathUser: 'some-path/some-dir/other-dir',
    pathModule: 'SomeModule',
  }
})

describe('Rendering', () => {
  test('Rendering ...', () => {
    
    mock({
      'path/to/template.txt': 'this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string',
    });

    rendering ({
      outputFile: 'outputFile.txt',
      outputPath: '',
      params: {
        output: 'outputPath',
        //@ts-ignore
        people: ['geddy', 'neil', 'alex']
      },
      template: 'path/to/template.txt'
    })

    let tmplt = fs.readFileSync('outputPath/outputFile.txt')
    //console.log(tmplt)

  })
})
