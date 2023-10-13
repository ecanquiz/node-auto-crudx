import fs from 'fs'
import ejs from 'ejs'
import colors from 'colors'
import createOutputPath from './createOutputPath'
//import { pathUser, pathModule } from '@config/output' // TODO conflict by testing...
import { pathUser, moduleName } from '../config/output'
import type { Rendering } from '@coreTypes/rendering'

export default ({ outputFile, outputPath, params, template }: Rendering): void => {
  params.pathModule = moduleName
  let tmplt = fs.readFileSync(template)
  let content = ejs.render(tmplt.toString(), params);

  if (!fs.existsSync(params.output)) {
    fs.mkdirSync(params.output)
    console.log("Output created successfully", `.${params.output}`)
  }

  let path = createOutputPath(params.output, outputPath)
  let file = `${path}/${outputFile}`
  let fileShow = file.replace(pathUser as unknown as string,'')  
  
  fs.writeFile(file, content, err => {
    (err)
      ?  console.error(err)
        : console.log(colors.yellow("File written successfully:"), colors.blue(`.${fileShow}`))
  });
}
