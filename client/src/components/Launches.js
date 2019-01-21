import React, { Fragment } from 'react'
import LaunchItem from './LaunchItem';

import logo from "../spacex-logo.png";

const Launches = ({ loading, launches }) => {
    if (loading) return null;

    return (
        <Fragment>
        <h1 className="display-4 my-3">
            Launches {` `}
            <img src={logo} alt="" style={{ width: '200px', display: 'inline' }}/>
        </h1>
        
        <Fragment>
            {launches.map((launch) => (
                <LaunchItem
                    key={launch.flight_number}
                    launch={launch}
                />
            ))}
        </Fragment>
      </Fragment>
    )
}
export default Launches
