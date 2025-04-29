import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { schema } from './graphql';
import { connectDatabase } from './services/database.service';

const startServer = async () => {
  const app = express();
  
  // Connect to the database
  await connectDatabase();

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      // Add any context you want to pass to resolvers here
    }),
  });

  server.applyMiddleware({ app });

  const httpServer = createServer(app);
  
  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();