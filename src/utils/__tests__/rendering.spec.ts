import { describe, expect, test, vi } from 'vitest'
import mock from 'mock-fs'
import rendering from '../rendering'
import fs from 'fs'

vi.mock('../../config/output', () => {
  return {
    pathUser: 'userName',
    pathModule: 'someModule',
  }
})

describe('Rendering', () => {
  test('Render template', () => {    
    mock({
      'userName/myApp': mock.directory({}),
      'path/to/template.txt': 'this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string'
    });

    rendering ({
      outputFile: 'outputFile.txt',
      outputPath: 'outputPath',
      params: { //@ts-ignore
        people: ['geddy', 'neil', 'alex'],
        output: 'userName/myApp/someModule'
      },
      template: 'path/to/template.txt'
    })
    
    fs.readFile('userName/myApp/someModule/outputPath/outputFile.txt', (err, data) => {
      if (err) throw err;
      expect(data.toString()).toBe("this-is-a-string [ geddy, neil, alex ] this-is-another-string")
    });
  })
})
