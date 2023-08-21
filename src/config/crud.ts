import dotenv from 'dotenv'

dotenv.config();

export default {
  schema: process.env.CRUD_SCHEMA,
  tableMaster: process.env.CRUD_TABLE_MASTER,
  tableMasterIsHelper: Boolean(JSON.parse((process.env.CRUD_TABLE_MASTER_IS_HELPER??''.toString()).toLowerCase())),
  excludeFields: process.env.CRUD_EXCLUDE_FIELDS
    ? process.env.CRUD_EXCLUDE_FIELDS.split(", ")
      : []
}

// https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript