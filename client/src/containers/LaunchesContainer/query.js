import gql from 'graphql-tag'; 

export const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
        launch_site {
            site_name_long
        }
    }
}
`;