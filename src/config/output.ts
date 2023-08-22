import dotenv from 'dotenv'

dotenv.config();

export const pathUser = process.env.PATH_USER
export const pathModule = process.env.PATH_MODULE
export const pathBackend = `${pathUser}/${process.env.PATH_BACKEND}/Modules/${pathModule}`
export const pathFrontend = `${pathUser}/${process.env.PATH_FRONTEND}/src/modules/${pathModule}`
