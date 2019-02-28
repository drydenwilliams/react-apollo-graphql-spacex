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

## Using GraphQL Playground

### Default query

Say we had an exsisting `services` query. We've opened it up in the GraphQL Playground and found it in the "docs" tab. We might see something like this: 

```gql
services(
 status: ServiceStatus
 categories: [ServiceCategory!]
)
```

this is telling is what parameters we could pass to the services query. We don't acutally in this case have to send anything. If there is no exclamation mark `!` at the end it is **note** required. e.g. `ServiceStatus!` or `[ServiceCategory!]!`.

If we would like to use explore this query and see what is returned can do this:

```
{
  services {
    nodes {
      id
    }
  }
}
```

**NOTE:** please not running this without the `id` will error. You will need to specify a field to return.

If we don't know what fields are returned or we can access. You can press `ctrl` + `space` in between the `{}` to get a popup of all the options like: `id` (you'll probably always get an `id` back.


### query with parameters

When you want to pass in some parameters to the query you can find out which ones it accepts, you can do something like this:

```
{
  services(<CTRL+SPACE here>) {
    nodes {
      id
    }
  }
}
```

this would say we could add the `categories` arguments to the query (the docs also says this). 

```
{
  services(categories: <CTRL+SPACE here>) {
    nodes {
      id
    }
  }
}
```

Then to see what the options are we could do the `ctrl` + `space` after the `:` to show more options. And end up with something like this:


```
{
  services(categories: VEHICLES) {
    nodes {
      id
    }
  }
}
```

If we run these queries we would get something back like this: 

```
{
  "data": {
    "services": {
       "nodes": [
          {
            "id": "259510d7-5373-47d2-bfff-b4fe7f78f3bc",
            "title": "API VEHICLES 1550485204193"
          },
          {
            "id": "618da880-fc41-4c8c-9bc6-74a35e914802",
            "title": "API VEHICLES 1550485210501"
          },
       ]
    }
  }
}
```


### query with args

If we would like to pass in a dynamic argument we could call the query `namedQueryWithArgs('STATUS')` which would pass that to the `services` query.

```
query namedQueryWithArgs(
  $status: ServiceStateType
) {
  services(status: $status) {
    nodes {
      id
    }
  }
}
```
