import React, { Component, Fragment} from 'react'
// For making the query
import gql from 'graphql-tag'; 
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

import logo from "../spacex-logo.png";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">
            Launches {` `}
            <img src={logo} alt="" style={{ width: '200px', display: 'inline' }}/>
        </h1>
        
        <Query query={LAUNCHES_QUERY}>
            {
                ({ loading, error, data }) => {
                    if (loading) return 'Loading...'
                    if (error) console.error(error);

                    return <Fragment>
                        {data.launches.map((launch) => (
                            <LaunchItem
                                key={launch.flight_number}
                                launch={launch}
                            />
                        ))}
                    </Fragment>
                }
            }
        </Query>
      </div>
    )
  }
}

export default Launches
