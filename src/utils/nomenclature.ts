export const uCamelCase = (str: string): string => {
  return str.split("_")
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
}

export const camelCase = (str: string): string => {
  const arr = str.split("_")
  const first =arr.shift()
  const withoutTheFirst = arr.map(
    s => s.charAt(0).toUpperCase() + s.slice(1)
  )
     
  return [first, ...withoutTheFirst].join("")    
}
