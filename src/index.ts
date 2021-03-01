import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { SupplierResolver } from "./resolvers/SupplierResolver";
import { ProductResolver } from "./resolvers/ProductResolver";

const main = async () => {
  await createConnection();

  const app = express();
  const port = 3000;

  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SupplierResolver, ProductResolver],
      validate: true,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
