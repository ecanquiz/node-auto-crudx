import fs from 'fs'
import ejs from 'ejs'
import createOutputPath from './createOutputPath'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (
    rendering: Rendering,
    params: Partial<ParamsAll>,
    output: string
  ): void => {

  let template = fs.readFileSync(rendering.template)
  let content = ejs.render(template.toString(), params);

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output)
    console.log("Output created successfully", output)
  }

  let path = createOutputPath(output, rendering.outputPath)
  let file = `${path}/${rendering.outputFile}`
  
  fs.writeFile(file, content, err => {
    (err)
      ?  console.error(err)
        : console.log(`File ${file} written successfully`)
  });
}
