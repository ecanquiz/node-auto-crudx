import { uCamelCase, camelCase } from './nomenclature';
import { singular } from './grammaticalNumber'

const addCommaToArr = ( arr: any[], index: number, less = 0 ) =>
  index < arr.length - less ? ', ' : ''

const noId = (column_name: string): boolean => 
  column_name !=='id'

const excludeFields = (column_name: string): boolean =>
  (!['created_at', 'updated_at', 'deleted_at'].includes(column_name))

const noIdAndExcludeFields = (column_name: string): boolean =>
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
