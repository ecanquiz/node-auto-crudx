import { uCamelCase, camelCase } from './nomenclature';
import { singular } from './grammaticalNumber'

export default {
  addCommaToArr: (
    arr: any[], index: number, less = 0
  ) => index < arr.length - less ? ', ' : '',
  camelCase,
  singular,
  uCamelCase,
  test1: (n:any)=> n,
  vn: {
    noId: (column_name: string): boolean => column_name !=='id',
    excludeFields: (column_name: string): boolean => (!['created_at', 'updated_at', 'deleted_at'].includes(column_name)),
  }
}
