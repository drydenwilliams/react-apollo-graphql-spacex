# React, Apollo, GraphQL & SpaceX API
A little SpaceX API, GraphQL, Apollo &amp; React web app

![Alt text](/screenshot.png?raw=true "Optional Title")

## Instalation 

```
# Install dependencies (server & client)
npm i
npm run install:server
npm run install:client

# Run server & client (:5000 & :3000)
npm run start

# Server only (:5000)
npm run start:server

# Client only (:3000)
npm run start:client

# Build for production (Builds into server ./public)
cd client && npm run build

# Graphiql - http://localhost:5000/graphql
```

## Apollo/GraphQL learnings

* Building a GraphQL sever with [Apollo Server](https://www.apollographql.com/docs/apollo-server/essentials/server.html#integrations)

## Questions/Answers I had to start with

### What is Apollo Server?
> Apollo Server is a library that helps you connect a GraphQL schema to an HTTP server in Node.js - [codingthesmartway](https://medium.com/codingthesmartway-com-blog/apollo-server-introduction-d24b593d4eda)

**NOTE:** It’s possible to use Apollo Server with all popular HTTP servers like [Express](https://expressjs.com/).

### What is Apollo Client?

Apollo Client is an implimentation on how to hook your GraphQL layer up to your client/web app or app. 

It allows you to use some helpful packages like: `apollo-boost`, `react-apollo` and `graphql` that helps connect your GraphQL layer with your client or website/app to React.

### Why is GraphQL?

Good points:
* Auto API documentation through it's GraphiQL
* Nice `JSON` style querying
* Fetch multiple sources in one query

### What is a fragment?

### What is an interface?



## Questions I still have:
* What happends if the payload is really big, over mobile connection. Using `Query` component wouldn't load anything for a while? Would you split the queries up?
* Do you put your application state within the Apollo cache?
* Do I hook up Redux for Application state? Leaving Apollo for Server side/ API stuff

## Thanks 

Originally I used this awesome Tutorial from Brad at [traversymedia](http://www.traversymedia.com/) which was great. Then I've replaced the `GraphQLSchema` API with the style in the [Apollo docs].(https://www.apollographql.com/docs/apollo-server/essentials/data.html)
