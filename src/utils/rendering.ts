import fs from 'fs'
import ejs from 'ejs'
import colors from 'colors'
import createOutputPath from './createOutputPath'
import { pathUser, pathModule } from '@config/output'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (rendering: Rendering, params: ParamsAll): void => {
  params.pathModule = pathModule
  let template = fs.readFileSync(rendering.template)
  let content = ejs.render(template.toString(), params);

  if (!fs.existsSync(params.output)) {
    fs.mkdirSync(params.output)
    console.log("Output created successfully", params.output)
  }

  let path = createOutputPath(params.output, rendering.outputPath)
  let file = `${path}/${rendering.outputFile}`
  let fileShow = file.replace(pathUser as unknown as string,'')  
  
  fs.writeFile(file, content, err => {
    (err)
      ?  console.error(err)
        : console.log(colors.yellow("File written successfully:"), colors.blue(fileShow))
  });
}
