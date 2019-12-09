import { UserInputError } from 'apollo-server'

export default {
  Query: {
    events: (_, params, context) => [],
    event: async (_, params, context) => {
      // if (!id && !slug) {
      //   throw new UserInputError(`slugOrIdRequired`)
      // }
      //
      return {}
    }
  }
}
