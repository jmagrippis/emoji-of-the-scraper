import { ApolloServer } from 'apollo-server'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers, introspection: true })

server.listen(process.env.PORT || 3400).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
