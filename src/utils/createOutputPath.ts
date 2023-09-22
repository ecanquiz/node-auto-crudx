import fs from 'fs'

export const isNotExistCreateIt = (output: string, pathTemp?: string)=> {
  if (!pathTemp) return

  const path = `${output}/${pathTemp}`
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
    console.log("Path created successfully", path)
  }
}

export default (output: string, path: string) => {
  const arr = path.split("/") 
  let pathTemp = arr.shift() 

  isNotExistCreateIt(output, pathTemp)
  arr.forEach(p => {
      pathTemp += `/${p}`
      isNotExistCreateIt(output, pathTemp)
  })

  return `${output}/${pathTemp}`
}
