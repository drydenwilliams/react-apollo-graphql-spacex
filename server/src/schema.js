const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    launches: [Launch]
    launch(flight_number: Int): Launch
  }

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  type Launch {
    flight_number: Int
    mission_name: String
    launch_year: String
    launch_date_local: String
    launch_success: Boolean
    rocket: RocketType
    launch_site: LaunchSite
  }

  type RocketType {
    rocket_id: String
    rocket_name: String
    rocket_type: String
  }

  type LaunchSite {
    site_name_long: String
  }
`;

module.exports = typeDefs;
