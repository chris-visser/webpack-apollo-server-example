import { merge } from 'lodash'
import Date from './scalars/Date'

import events from './events';


const resolvers = {
  Date
}

export default merge(resolvers, events)
