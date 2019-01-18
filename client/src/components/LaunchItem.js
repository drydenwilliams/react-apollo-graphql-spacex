import React from 'react'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default function LaunchItem({ 
    launch: { 
        flight_number, 
        mission_name, 
        launch_date_local, 
        launch_success 
    }
}) {
  return (
    <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
            <h4>
                <span>Mission: </span>
                <span className={classnames({
                    'text-success': launch_success,
                    'text-danger': !launch_success
                })}>{mission_name}</span>
            </h4>
            </div>
            <div className="col-md-3 text-right">
                <Link 
                    to={`/launch/${flight_number}`}
                    className="btn btn-secondary"
                >
                    Launch details
                </Link>
            </div>
        </div>
    </div>
  )
}
