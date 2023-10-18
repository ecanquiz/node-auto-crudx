import dotenv from 'dotenv'

dotenv.config();

export default {  
  schema: process.env.CRUD_SCHEMA,
  tableMaster: process.env.CRUD_TABLE_MASTER,
  tableMasterIsHelper: Boolean(JSON.parse((process.env.CRUD_TABLE_MASTER_IS_HELPER??''.toString()).toLowerCase())),
  excludeFields: process.env.CRUD_EXCLUDE_FIELDS ? process.env.CRUD_EXCLUDE_FIELDS.split(", ") : [],
  generate: Boolean(JSON.parse((process.env.CRUD_GENERATE??''.toString()).toLowerCase())),
  stackBackend: process.env.CRUD_GENERATE_BACKEND,
  stackFrontend: process.env.CRUD_GENERATE_FRONTEND
}

// https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
