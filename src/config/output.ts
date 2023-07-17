import dotenv from 'dotenv'

dotenv.config();

export const pathUser = process.env.PATH_USER
export const pathBackend = `${pathUser}/${process.env.PATH_BACKEND}`
export const pathFrontend = `${pathUser}/${process.env.PATH_FRONTEND}`
export const pathModule = process.env.PATH_MODULE
