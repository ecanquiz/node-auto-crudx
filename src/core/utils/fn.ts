import { uCamelCase, camelCase } from './nomenclature';
import { singular } from './grammaticalNumber'

export const addCommaToArr = ( arr: any[], index: number, less = 0 ) =>
  index < arr.length - 1 - less ? ', ' : ''

export const noId = (column_name: string): boolean => 
  column_name !=='id'

export const excludeFields = (column_name: string): boolean =>
  (!['created_at', 'updated_at', 'deleted_at'].includes(column_name))

export const noIdAndExcludeFields = (column_name: string): boolean =>
  noId(column_name) && excludeFields(column_name)

export default {
  addCommaToArr,
  camelCase,
  singular,
  uCamelCase,
  v: {
    excludeFields,
    noId,
    noIdAndExcludeFields
  }
}
