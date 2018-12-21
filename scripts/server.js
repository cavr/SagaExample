const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

const books = [
  {
    title: "Book1",
    author: "Hellgo"
  },
  {
    title: "Book2",
    author: "Weblcome"
  }
];

const people = [
  {
    name: "Book1",
    age: 19
  },
  {
    name: "Book2",
    age: 28
  }
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Person {
    name: String
    age: Int
  }

  type Query {
    books: [Book]
    people: [Person]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    people: () => people
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

exports.app = app;
exports.server = server;
