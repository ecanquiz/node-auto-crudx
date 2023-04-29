import dotenv from 'dotenv'

dotenv.config();

export const pathBackend = `${process.env.PATH_USER}/${process.env.PATH_BACKEND}`
export const pathFrontent =  `${process.env.PATH_USER}/${process.env.PATH_FRONTENT}`