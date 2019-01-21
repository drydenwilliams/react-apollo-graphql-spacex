import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

import LaunchesContainer from "./containers/LaunchesContainer";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <div className="container">
              <Route exact path="/" component={LaunchesContainer} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
