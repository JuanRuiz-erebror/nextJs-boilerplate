import { constants } from '../actions/counter'


export default (type) => type == constants.COUNTER_INCREMENT ? 1 : -1
