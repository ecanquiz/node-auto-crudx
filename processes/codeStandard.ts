import { uCamelCase, camelCase } from '../utils/nomenclature';
import {plural} from '../utils/plural'
import {singular} from '../utils/singular'

export default async () => {
    const str = 'we_have_learned_something_new_today';
    console.log(uCamelCase(str))
    console.log(camelCase(str))
    console.log(plural('foot'))
    console.log(singular('men'))
}