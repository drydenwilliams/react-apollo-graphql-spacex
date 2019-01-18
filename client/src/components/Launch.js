import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name,
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number); // it needs to be an Int as per the schema
    return (
      <Fragment>
        <h1>Launch</h1>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) console.error(error);

            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { 
                rocket_id,
                rocket_name,
                rocket_type
              }
            } = data.launch;
            return (
              <div>
                <h1>Mission: {mission_name}</h1>
                <ul>
                  <li>{`Flight number: ${flight_number}`}</li>
                  <li>{`Launch year: ${launch_year}`}</li>
                  <li>{`Launch success: ${launch_success}`}</li>
                  <li>{`Rocket ID: ${rocket_id}`}</li>
                  <li>{`Rocket Name: ${rocket_name}`}</li>
                  <li>{`Rocket Type: ${rocket_type}`}</li>
                  
                </ul>
                <button className="btn btn-primary">Get more info</button>
                <Link to="/" className="btn btn-secondary">Back</Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
