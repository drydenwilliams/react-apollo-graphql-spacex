const axios = require("axios");

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    launches: async (parent, args) => {
      const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
      return res.data;
    },
    launch: async (parent, args) => {
      const res = await axios.get(
        `https://api.spacexdata.com/v3/launches/${args.flight_number}`
      );
      return res.data;
    }
  }
};

module.exports = resolvers;
