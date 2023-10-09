import { uCamelCase, camelCase } from './nomenclature';
import { singular } from './grammaticalNumber'
import type { TableMasterForeignKeysAssoc } from '@coreTypes/db';

export const addCommaToArr = ( arr: any[], index: number, less = 0 ) =>
  index < arr.length - 1 - less ? ', ' : ''

export const noId = (column_name: string): boolean => 
  column_name !=='id'

export const excludeFields = (column_name: string): boolean =>
  (!['created_at', 'updated_at', 'deleted_at'].includes(column_name))

export const noIdAndExcludeFields = (column_name: string): boolean =>
  noId(column_name) && excludeFields(column_name)

export const foreignTableName = (
  columnName: string,
  tableForeignKeysAssoc: TableMasterForeignKeysAssoc[]
): string | undefined => tableForeignKeysAssoc.find(tbl => tbl.column_name === columnName)?.foreign_table_name

export default {
  addCommaToArr,
  camelCase,
  foreignTableName,
  singular,
  uCamelCase,
  v: {
    excludeFields,
    noId,
    noIdAndExcludeFields
  }
}
