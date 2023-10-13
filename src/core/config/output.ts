import dotenv from 'dotenv'

dotenv.config();

export const pathUser = process.env.PATH_USER
export const moduleName = process.env.PATH_MODULE
export const pathModule = moduleName ? `/${moduleName}` : ""
export const pathBackend = `${pathUser}/${process.env.PATH_BACKEND}/${process.env.PATH_BACKEND_ROOT}${pathModule}`
export const pathFrontend = `${pathUser}/${process.env.PATH_FRONTEND}/${process.env.PATH_FRONTEND_ROOT}${pathModule}`
