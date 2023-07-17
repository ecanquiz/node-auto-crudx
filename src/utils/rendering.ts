import fs from 'fs'
import ejs from 'ejs'
import createOutputPath from './createOutputPath'
import { pathModule } from '@config/output'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (
    rendering: Rendering,
    params: Partial<ParamsAll>,
    output: string
  ): void => {

  // TODO (used any, danger) 
  const params1 = params as unknown as any
  params1.pathModule = pathModule
  let template = fs.readFileSync(rendering.template)
  let content = ejs.render(template.toString(), params1);

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
