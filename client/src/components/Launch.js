import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classnames from "classnames";

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
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number); // it needs to be an Int
    return (
      <Fragment>
          <h1>Launch</h1>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
          {
              ({ loading, error, data }) => {
                  if (loading) return 'Loading...';
                  if (error) console.error(error);

                  const { 
                      mission_name, 
                      flight_number, 
                      launch_year, 
                      launch_success, 
                      rocket: { 
                          rocket_id 
                        } 
                } = data.launch;
                  return <div>
                      <h1>Mission: {mission_name}</h1>
                  </div>
              }
          }
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
