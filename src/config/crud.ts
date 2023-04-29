import dotenv from 'dotenv'

dotenv.config();

export default {
  schema: process.env.CRUD_SCHEMA,
  tableMaster: process.env.CRUD_TABLE_MASTER,
  excludeFields: process.env.CRUD_EXCLUDE_FIELDS
    ? process.env.CRUD_EXCLUDE_FIELDS.split(", ")
      : []
}

