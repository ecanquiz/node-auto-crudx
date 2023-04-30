import fs from 'fs'

export default (output: string, path: string) => {
  const isNotExistCreateIt = (pathTemp?: string)=> {
    if (!pathTemp) return

    const path = `${output}/${pathTemp}`
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
      console.log("Path created successfully", path)
    }
  }

  const arr = path.split("/") 
  let pathTemp = arr.shift() 

  isNotExistCreateIt(pathTemp)
  arr.forEach(p => {
      pathTemp += `/${p}`
      isNotExistCreateIt(pathTemp)
  })

  return `${output}/${pathTemp}`
}
