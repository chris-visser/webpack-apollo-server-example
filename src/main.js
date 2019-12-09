import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'
import typeDefs from './schema.gql'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  // mocks: {
  //   Date: () => {
  //     return new Date('2020-02-19T08:00:00.000Z')
  //   }
  // },
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}. `))
